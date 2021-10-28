import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/sharedAdmin/api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VendeursService {

  public vendeursurl = 'http://localhost:3000/vendeurs/';
  constructor(private apiService: ApiService, private http: HttpClient) { }

  allvendeurs(): Observable<any> {
    return this.apiService.get(this.vendeursurl+"getAllVendeurs");
  }
  addNewVendeurs(vendeursdto): Observable<any> {
    return this.apiService.post(this.vendeursurl+"ajouter", vendeursdto);
  }

  singleVendeurs(id) {
    return this.apiService.get(this.vendeursurl+"getvendeurNamebyid/" + id);
  }
  updateVendeurs(id, vendeursdto): Observable<any> {
    return this.apiService.put(this.vendeursurl+"update/" + id, vendeursdto);
  }
  deleteVendeurs(id): Observable<any> {
    return this.apiService.delete(this.vendeursurl+"delete/" + id);
  }
 
}
