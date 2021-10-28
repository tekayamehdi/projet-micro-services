import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../sharedCustomer/customer.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {

  allproducts;
  showcheckout = false;

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.customerService.allProduct().subscribe(data => {
      this.allproducts = data;
      // console.log("ALl Product", this.all_products);
    }, error => {
      console.log('My error', error);
    });
  }

  buyProduct(id) {
    this.showcheckout = true;
    this.customerService.quickBuyProduct(id) ;
    this.router.navigateByUrl('/checkout');
  }

  addToCart() {
    alert('Juste pour test je n ai pas fait le panier');
  }

}
