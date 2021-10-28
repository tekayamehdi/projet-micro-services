import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginSignupService} from '../../shared/services/login-signup.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  signInFormValue: any = {};
  userdata;

  constructor(private router: Router, private logsignservice: LoginSignupService) { }

  ngOnInit() {
  }

  onSubmitSignIn() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
    this.logsignservice.adminLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
      this.userdata = data;
      if (this.userdata.length === 1) {
        // alert("Validate")
        sessionStorage.setItem('user_session_id', this.userdata[0].id);
        sessionStorage.setItem('role', this.userdata[0].role);
        this.router.navigateByUrl('/admin-dashboard');
      } else {
        alert('Invalid');
      }
      console.log(this.userdata);

    }, error => {
      console.log('erreur', error);
    });
  }
}
