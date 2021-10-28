import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  user;
  total = 0;
  admin = 0;
  seller = 0;
  buyer = 0;

  productdash;
  totproduct = 0;
  pubproduct = 0;
  inaproduct = 0;
  dproduct = 0;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminUserDashboardData();
    this.adminProductDashboardData();
  }

  userDashboard() {
    this.router.navigateByUrl('/admin/user');
  }

  productDashboard() {
    this.router.navigateByUrl('/admin/product');
  }

  adminUserDashboardData() {
    this.adminService.userDashboardData().subscribe(data => {
      this.user = data;
      // tslint:disable-next-line:forin
      for (const user in this.user) {
        // console.log(this.user_dashboard_data[status].status);
        if (this.user[user].role === 'admin') {
          ++this.admin;
        } else if (this.user[user].role === 'seller') {
          ++this.seller;
        } else if (this.user[user].role === 'buyer') {
          ++this.buyer;
        }
        ++this.total;
      }
    }, error => {
      console.log('Erreur', error);
    });
  }

  adminProductDashboardData() {
    this.adminService.productDashboardData().subscribe(data => {
      this.productdash = data;
      console.log(this.productdash);


      for (status in this.productdash) {
        // console.log(this.product_dashboard_data[status].status);
        if (this.productdash[status].status === 'publish') {
          ++this.pubproduct;
        } else if (this.productdash[status].status === 'inactive') {
          ++this.inaproduct;
        } else if (this.productdash[status].status === 'draft') {
          ++this.dproduct;
        }
        ++this.totproduct;
      }
    }, error => {
      console.log('erreur', error);
    });
  }
}
