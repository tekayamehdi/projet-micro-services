import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/sharedAdmin/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LunettesService {

  public vendeursurl = 'http://localhost:3002/lunettess/';
  constructor(private apiService: ApiService, private http: HttpClient) { }

  allvendeurs(): Observable<any> {
    return this.apiService.get(this.vendeursurl+"getAllLunettes");
  }
  addNewVendeurs(vendeursdto): Observable<any> {
    return this.apiService.post(this.vendeursurl+"ajouter", vendeursdto);
  }

  singleVendeurs(id) {
    return this.apiService.get(this.vendeursurl+"getlunetteModelebyid/" + id);
  }
  updateVendeurs(id, vendeursdto): Observable<any> {
    return this.apiService.put(this.vendeursurl+"update/" + id, vendeursdto);
  }
  deleteVendeurs(id): Observable<any> {
    return this.apiService.delete(this.vendeursurl+"delete/" + id);
  }
}
