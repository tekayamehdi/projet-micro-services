import { Injectable } from '@angular/core';
import { ApiService } from '../../core/sharedAdmin/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public producturl = 'http://localhost:3000/products/';
  constructor(private apiService: ApiService, private http: HttpClient) { }

  allProduct(): Observable<any> {
    return this.apiService.get(this.producturl);
  }
  addNewProduct(productdto): Observable<any> {
    return this.apiService.post(this.producturl, productdto);
  }

  singleProduct(id) {
    return this.apiService.get(this.producturl + id);
  }
  updateProduct(id, productdto): Observable<any> {
    return this.apiService.put(this.producturl + id, productdto);
  }
  deleteProduct(id): Observable<any> {
    return this.apiService.delete(this.producturl + id);
  }
}
