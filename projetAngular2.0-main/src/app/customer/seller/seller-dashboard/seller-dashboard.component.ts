import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../sharedCustomer/customer.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {


  order;
  totalorder;
  lastorder;

  productdashboard;
  totproduct = 0;
  pubproduct = 0;
  inaproduct = 0;
  dproduct = 0;

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.sellerOrderDashboardData();
    this.sellerProductDashboardData();
  }
  sellerProductDashboard() {
    this.router.navigateByUrl('/seller/product');
  }
  sellerOrderDashboardData() {
    this.customerService.orderDashboardData().subscribe(data => {
      this.order = data;
      this.totalorder = Number(this.order.length);
      this.lastorder = this.order[this.totalorder - 1].dateTime;
      // console.log("product_dashboard_data", this.order_dashboard_data);
    }, error => {
      console.log('erreur', error);
    });
  }
  sellerOrderDashboard() {
    alert('WIP');
  }
  sellerProductDashboardData() {
    this.customerService.productDashboardData().subscribe(data => {
      this.productdashboard = data;
      for (status in this.productdashboard) {
        // console.log(this.product_dashboard_data[status].status);
        if (this.productdashboard[status].status === 'publish') {
          ++this.pubproduct;
        } else if (this.productdashboard[status].status === 'inactive') {
          ++this.inaproduct;
        } else if (this.productdashboard[status].status === 'draft') {
          ++this.dproduct;
        }
        ++this.totproduct;
      }
      // console.log(this.pubproduct);

      // console.log("productdashboard", this.productdashboard[this.productdashboard.length - 1]);
    }, error => {
      console.log('erreur', error);
    });
  }
}
