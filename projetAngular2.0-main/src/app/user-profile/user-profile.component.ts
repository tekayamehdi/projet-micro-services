import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/services/user.service';
import {User} from '../core/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;
  userProfile = false;
  userid: number;
  userdata;
  userupdated;
  userdto: User;
  userprofilepic;
  userlanguage;
  userrole;


  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('user_session_id'));
    this.userProfileForm = this.formBuilder.group({
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
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPhoto: [],
    });
    this.editUserData(this.userid);
  }

  get rf() { return this.userProfileForm.controls; }

  editUserData(userid) {
    this.userservice.getUserData(userid).subscribe(data => {
      this.userdata = data;
      this.userprofilepic = this.userdata.uploadPhoto;
      this.userlanguage = this.userdata.language;
      this.userrole = this.userdata.role;
      this.userProfileForm.setValue({
        name: this.userdata.name,
        mobNumber: this.userdata.mobNumber,
        age: this.userdata.age,
        dob: this.userdata.dob,
        email: this.userdata.email,
        password: this.userdata.password,
        addLine1: this.userdata.address.addLine1,
        addLine2: this.userdata.address.addLine2,
        city: this.userdata.address.city,
        state: this.userdata.address.state,
        zipCode: this.userdata.address.zipCode,
        gender: this.userdata.gender,
        aboutYou: this.userdata.aboutYou,
        uploadPhoto: '',
      });
    }, error => {
      console.log('My error', error);
    });
  }

  updateProfile() {
    this.userProfile = true;
    if (this.userProfileForm.invalid) {
      this.toastr.error('Error Occured!', 'User Profile!');
      return;
    }
    this.userupdated = this.userProfileForm.value;
    this.userdto = {
      name: this.userupdated.name,
      mobNumber: this.userupdated.mobNumber,
      age: this.userupdated.age,
      dob: this.userupdated.dob,
      email: this.userupdated.email,
      password: this.userupdated.password,
      language: this.userupdated.language,
      gender: this.userupdated.gender,
      address: {
        id: 0,
        addLine1: this.userupdated.addLine1,
        addLine2: this.userupdated.addLine2,
        city: this.userupdated.city,
        state: this.userupdated.state,
        zipCode: this.userupdated.zipCode,
      },
      aboutYou: this.userupdated.aboutYou,
      uploadPhoto: (this.userupdated.uploadPhoto === '' ? this.userprofilepic : this.userupdated.uploadPhoto),
      agreetc: this.userupdated.agreetc,
      role: this.userrole
    };
    this.userservice.updateUserData(this.userid, this.userdto).subscribe(data => {
      this.toastr.success('Profile Updated Successfully!', 'User Profile!');

      if (this.userrole === 'admin') {
        this.router.navigateByUrl('/admin-dashboard');
      } else if (this.userrole === 'seller') {
        this.router.navigateByUrl('/seller-dashboard');
      } else if (this.userrole === 'buyer') {
        this.router.navigateByUrl('/buyer-dashboard');
      }
    }, err => {
      this.toastr.error('Some Error Occured!', 'User Profile!');
      // alert("Some Error Occured");
    });
  }

}
