import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../sharedCustomer/customer.service';
import {Product} from '../../../core/models/Products';
import {User} from '../../../core/models/User';
import {Order} from '../../../core/models/Order';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    productid: number;
    userid: number;
    product: Product;
    userdetail: User;
    useraddress;
    usercontact: number;
    orderdto: Order;

    constructor(private customerService: CustomerService, private router: Router) {
    }

    ngOnInit() {
        this.customerService.currentProduct.subscribe(product => this.productid = product);
        this.userid = Number(sessionStorage.getItem('user_session_id'));
        this.productDetail(this.productid);
        this.userAddress(this.userid);
    }

    productDetail(productid) {
        this.customerService.individualProduct(productid).subscribe(data => {
            this.product = data;
            // console.log("One Product", this.individual_product);
        }, error => {
            console.log('My error', error);
        });
    }

    userAddress(userid) {
        this.customerService.userDetail(userid).subscribe(data => {
            // this.user_detail = data.address;
            this.useraddress = data.address;
            this.usercontact = data.mobNumber;
        }, error => {
            console.log('My error', error);
        });
    }

    placeOrder() {
        this.orderdto = {
            id: 0,
            userId: this.userid,
            sellerId: 2,
            // Now it is hard coded, we are not implimented multi seller functionlity
            product: {
                id: this.product.id,
                name: this.product.name,
                uploadPhoto: this.product.uploadPhoto,
                productDesc: this.product.productDesc,
                price: this.product.price,
                status: this.product.status,
                quantity: this.product.quantity
            },
            deliveryAddress: {
                id: 0,
                addLine1: this.useraddress.addLine1,
                addLine2: this.useraddress.addLine2,
                city: this.useraddress.city,
                state: this.useraddress.state,
                zipCode: Number(this.useraddress.zipCode)
            },
            contact: this.usercontact,
            dateTime: new Date().toLocaleDateString()
        };
        // console.log("Place order dto", this.order_dto);
        this.customerService.insertNewOrder(this.orderdto).subscribe(data => {
            // console.log("Order placed successfully", data);
            alert('Order places successfully');
            this.router.navigateByUrl('/buyer-dashboard');
        }, err => {
            alert('Some Error Occured');
        });

    }

}
