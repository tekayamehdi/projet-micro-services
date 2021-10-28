import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../core/sharedAdmin/api.service';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginSignupService {
    url = 'http://localhost:3000';
    public loginurl = this.url;
    public regurl = this.url;

    constructor(private http: HttpClient, private apiService: ApiService) {
    }

    // tslint:disable-next-line:variable-name
    authLogin( user_name , password): Observable<any> {
        return this.apiService.get(this.url + '/user?email=' + user_name + '&password=' + password);
    }

    // tslint:disable-next-line:variable-name
    userRegister(user_dto): Observable<any> {
        return this.apiService.post(this.url + '/user', user_dto);
    }

    // tslint:disable-next-line:variable-name
    adminLogin(user_name, password): Observable<any> {
        return this.apiService.get(this.url + '/user?email=' + user_name + '&password=' + password + '&role=admin');
    }
}
