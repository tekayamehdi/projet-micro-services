import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {LoginSignupService} from '../../shared/services/login-signup.service';
import {User} from '../../core/models/User';


@Component({
    selector: 'app-signin-signup',
    templateUrl: './signin-signup.component.html',
    styleUrls: ['./signin-signup.component.scss']
})
export class SigninSignupComponent implements OnInit {

    regForm = false;
    signUpform: FormGroup;
    signInform: FormGroup;
    signUpsubmitted = false;
    href = '';
    userdata;
    userdto: { uploadPhoto: any; password: any; address: { zipCode: any; city: any; addLine1: any; id: number; addLine2: any; state: any }; role: any; gender: any; dob: any; name: any; language: any; age: any; agreetc: any; email: any; mobNumber: any };
    userregdata;

    signInFormValue: any = {};

    constructor(private formBuilder: FormBuilder, private router: Router, private logsignservice: LoginSignupService) {
    }

    ngOnInit() {
        this.href = this.router.url;
        if (this.href === '/sign-up') {
            this.regForm = true;
        } else if (this.href === '/sign-in') {
            this.regForm = false;
        }

        this.signUpform = this.formBuilder.group({
            name: ['', Validators.required],
            mobNumber: ['', Validators.required],
            age: ['', Validators.required],
            dob: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            addLine1: ['', Validators.required],
            addLine2: [],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required],
            language: ['', Validators.required],
            gender: ['', Validators.required],
            uploadPhoto: ['', Validators.required],
            agreetc: ['', Validators.required],
            role: ['', Validators.required],

        });

        this.signInform = this.formBuilder.group({});
    }

    get rf() {
        return this.signUpform.controls;
    }

    onSubmitSignUp() {
        this.signUpsubmitted = true;
        if (this.signUpform.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.signUpform.value))
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpform.value))
        // console.log(this.signUpform.value)
        this.userregdata = this.signUpform.value;
        this.userdto = {
            age: this.userregdata.age,
            agreetc: this.userregdata.agreetc,
            // city: this.user_reg_data.city,
            dob: this.userregdata.dob,
            email: this.userregdata.email,
            gender: this.userregdata.gender,
            address: {
                id: 0,
                addLine1: this.userregdata.addLine1,
                addLine2: this.userregdata.addLine2,
                city: this.userregdata.city,
                state: this.userregdata.state,
                zipCode: this.userregdata.zipCode,
            },
            language: this.userregdata.language,
            mobNumber: this.userregdata.mobNumber,
            name: this.userregdata.name,
            password: this.userregdata.password,
            // state: this.user_reg_data.state,
            uploadPhoto: this.userregdata.uploadPhoto,
            // zipCode: this.user_reg_data.zipCode,
            role: this.userregdata.role
        };
        this.logsignservice.userRegister(this.userdto).subscribe(data => {
            // console.log(data);
            alert('Success');
            this.router.navigateByUrl('/sign-in');
        }, err => {
            alert('Some Error Occured');
        });
    }

    onSubmitSignIn() {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
        this.logsignservice.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
            this.userdata = data;
            if (this.userdata.length === 1) {
                // alert("Validate")
                if (this.userdata[0].role === 'seller') {
                    sessionStorage.setItem('user_session_id', this.userdata[0].id);
                    sessionStorage.setItem('role', this.userdata[0].role);
                    this.router.navigateByUrl('/seller-dashboard');
                } else if (this.userdata[0].role === 'buyer') {
                    sessionStorage.setItem('user_session_id', this.userdata[0].id);
                    sessionStorage.setItem('role', this.userdata[0].role);
                    this.router.navigateByUrl('/buyer-dashboard');
                } else {
                    alert('Invalid-user-role');
                }
            } else {
                alert('Invalid');
            }
            console.log(this.userdata);

        }, error => {
            console.log('My error', error);
        });
    }

}
