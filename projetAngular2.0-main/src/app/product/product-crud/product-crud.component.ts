import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../core/models/Products';

declare var jQuery: any;

@Component({
    selector: 'app-product-crud',
    templateUrl: './product-crud.component.html',
    styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {
    productsall;
    addEditProductForm: FormGroup;
    addEditProduct = false;
    popup: string;
    addproduct: boolean;
    editproduct: boolean;

    productdata;
    productdto: Product;

    oneproduct;
    editproductid;

    constructor(private formBuilder: FormBuilder, private router: Router, private productservice: ProductService) {
    }

    ngOnInit() {
        this.addEditProductForm = this.formBuilder.group({
            name: ['', Validators.required],
            uploadPhoto: ['', Validators.required],
            productDesc: ['', Validators.required],
            price: ['', Validators.required],
            quantity: ['', Validators.required],
            status: ['', Validators.required]
        });
        this.getAllProduct();
    }

    get rf() {
        return this.addEditProductForm.controls;
    }

    getAllProduct() {
        this.productservice.allProduct().subscribe(data => {
            this.productsall = data;
        }, error => {
            console.log('erreur', error);
        });
    }

    addProductPopup() {
        this.addproduct = true;
        this.editproduct = false;
        this.popup = 'Add New Product';
        this.addEditProductForm.reset();
    }

    addNewProduct() {
        this.addEditProduct = true;
        if (this.addEditProductForm.invalid) {
            return;
        }
        this.productdata = this.addEditProductForm.value;
        this.productdto = {
            id: 0,
            name: this.productdata.name,
            uploadPhoto: this.productdata.uploadPhoto,
            productDesc: this.productdata.productDesc,
            price: this.productdata.price,
            quantity: this.productdata.quantity,
            status: this.productdata.status
        };
        this.productservice.addNewProduct(this.productdto).subscribe(data => {
            jQuery('#addEditProductModal').modal('toggle');
            this.getAllProduct();
        }, err => {
            alert('Some Error Occured');
        });
    }

    editProductPopup(id) {
        this.addproduct = false;
        this.editproduct = true;
        this.popup = 'Edit Product';
        this.addEditProductForm.reset();
        this.productservice.singleProduct(id).subscribe(data => {
            this.oneproduct = data;
            this.editproductid = data.id;
            this.addEditProductForm.setValue({
                name: this.oneproduct.name,
                uploadPhoto: this.oneproduct.uploadPhoto,
                productDesc: this.oneproduct.productDesc,
                price: this.oneproduct.price,
                quantity: this.productdata.quantity,
                status: this.oneproduct.status
            });
        });
    }

    updateProduct() {
        this.addEditProduct = true;
        if (this.addEditProductForm.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
            return;
        }
        this.productdata = this.addEditProductForm.value;
        this.productdto = {
            id: 0,
            name: this.productdata.name,
            uploadPhoto: this.productdata.uploadPhoto,
            productDesc: this.productdata.productDesc,
            price: this.productdata.price,
            quantity: this.productdata.quantity,
            status: this.productdata.status
        };
        this.productservice.updateProduct(this.editproductid, this.productdto).subscribe(data => {
            // console.log(data);
            jQuery('#addEditProductModal').modal('toggle');
            this.getAllProduct();
        }, err => {
            alert('Some Error Occured');
        });
    }

    deleteProduct(id) {
        const r = confirm('Do you want to delete the product ID: ' + id + '?');
        if (r === true) {
            this.productservice.deleteProduct(id).subscribe(data => {
                console.log('deleted successfully', data);
                this.getAllProduct();
            }, err => {
                alert('Some Error Occured');
            });
        } else {
            alert('You pressed Cancel!');
        }

    }
}
