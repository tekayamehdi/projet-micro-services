import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../services/admin.service';
import {User} from '../../core/models/User';
declare var jQuery: any;

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {

  alluser;
  singleuser;
  addEditUserForm: FormGroup;
  userdto: User;
  userregister;
  edituserid;
  uploadfile: string;

  addEditUser = false; // for form validation

  adduser = false;
  edituser = false;
  popup: string;

  signInFormValue: any = {};


  constructor(private formBuilder: FormBuilder, private router: Router, private adminservice: AdminService) { }

  ngOnInit() {
    this.getAllUser();
    this.addEditUserForm = this.formBuilder.group({
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
      aboutYou: ['', Validators.required],
      uploadPhoto: [],
      agreetc: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  getAllUser() {
    this.adminservice.allUser().subscribe(data => {
      this.alluser = data;
      // console.log("getAllUser",this.all_user_data);
    }, error => {
      console.log('My error', error);
    });
  }
  get rf() { return this.addEditUserForm.controls; }

  // popup when add
  addUserPopup() {
    this.edituser = false;
    this.adduser = true;
    this.popup = 'Add New User';
    this.addEditUserForm.reset();
  }
  addUser() {
    this.addEditUser = true;
    if (this.addEditUserForm.invalid) {
      alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value));
      return;
    }
    this.userregister = this.addEditUserForm.value;
    this.userdto = {
      name: this.userregister.name,
      mobNumber: this.userregister.mobNumber,
      age: this.userregister.age,
      dob: this.userregister.dob,
      email: this.userregister.email,
      password: this.userregister.password,
      language: this.userregister.language,
      gender: this.userregister.gender,
      address: {
        id: 0,
        addLine1: this.userregister.addLine1,
        addLine2: this.userregister.addLine2,
        city: this.userregister.city,
        state: this.userregister.state,
        zipCode: this.userregister.zipCode,
      },
      aboutYou: this.userregister.aboutYou,
      uploadPhoto: this.userregister.uploadPhoto,
      agreetc: this.userregister.agreetc,
      role: this.userregister.role
    };
    this.adminservice.addUser(this.userdto).subscribe(data => {
      this.getAllUser();
      jQuery('#addEditUserModal').modal('toggle');
    }, err => {
      alert('Some Error Occured');
    });
  }

  // popup when edit
  editUserPopup(userid) {
    this.edituserid = userid;
    this.edituser = true;
    this.adduser = false;
    this.popup = 'Edit User';
    this.adminservice.singleUser(userid).subscribe(data => {
      this.singleuser = data;
      this.uploadfile = this.singleuser.uploadPhoto;
      this.addEditUserForm.setValue({
        name: this.singleuser.name,
        mobNumber: this.singleuser.mobNumber,
        age: this.singleuser.age,
        dob: this.singleuser.dob,
        email: this.singleuser.email,
        password: this.singleuser.password,
        language: this.singleuser.language,
        gender: this.singleuser.gender,
        addLine1: this.singleuser.address.addLine1,
        addLine2: this.singleuser.address.addLine2,
        city: this.singleuser.address.city,
        state: this.singleuser.address.state,
        zipCode: this.singleuser.address.zipCode,
        aboutYou: this.singleuser.aboutYou,
        uploadPhoto: '',
        agreetc: this.singleuser.agreetc,
        role: this.singleuser.role,
      });
      // console.log("Individual User", this.single_user_data);
    }, error => {
      console.log('My error', error);
    });
  }
  updateUser() {
    if (this.addEditUserForm.invalid) {
      return;
    }


    this.userregister = this.addEditUserForm.value;
    this.userdto = {
      name: this.userregister.name,
      mobNumber: this.userregister.mobNumber,
      age: this.userregister.age,
      dob: this.userregister.dob,
      email: this.userregister.email,
      password: this.userregister.password,
      language: this.userregister.language,
      gender: this.userregister.gender,
      address: {
        id: 0,
        addLine1: this.userregister.addLine1,
        addLine2: this.userregister.addLine2,
        city: this.userregister.city,
        state: this.userregister.state,
        zipCode: this.userregister.zipCode,
      },
      aboutYou: this.userregister.aboutYou,
      uploadPhoto: (this.userregister.uploadPhoto === '' ? this.uploadfile : this.userregister.uploadPhoto),
      agreetc: this.userregister.agreetc,
      role: this.userregister.role
    };
    this.adminservice.editUser(this.edituserid, this.userdto).subscribe(data => {
      this.getAllUser();
      jQuery('#addEditUserModal').modal('toggle');
    }, err => {
      alert('Some Error Occured');
    });
  }
  deleteUser(userid) {
    this.adminservice.deleteUser(userid).subscribe(data => {
      this.getAllUser();
    }, err => {
      alert('Some Error Occured');
    });
  }

}
