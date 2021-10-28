import { Injectable } from '@angular/core';
import { ApiService } from '../../core/sharedAdmin/api.service';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseurl = 'http://localhost:3000';
  private productid = new BehaviorSubject(null);
  currentProduct = this.productid.asObservable();

  public producturl = this.baseurl + '/products/';
  public userurl = this.baseurl + '/user/';
  public orderurl = this.baseurl + '/orders/';

  constructor(private apiService: ApiService) { }

  allProduct(): Observable<any> {
    return this.apiService.get(this.producturl);
  }

  quickBuyProduct(productid: number) {
    this.productid.next(productid);
  }

  individualProduct(id) {
    return this.apiService.get(this.producturl + id);
  }
  userDetail(id) {
    return this.apiService.get(this.userurl + id);
  }
  insertNewOrder(orderdto): Observable<any> {
    return this.apiService.post(this.orderurl, orderdto);
  }

  orderDashboardData(): Observable<any> {
    return this.apiService.get(this.orderurl);
  }
  productDashboardData(): Observable<any> {
    return this.apiService.get(this.producturl);
  }
}
