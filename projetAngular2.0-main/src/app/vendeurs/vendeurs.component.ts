import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendeurs } from '../core/models/Vendeurs';
import { VendeursService } from '../shared/services/vendeurs.service';

declare var jQuery: any;
@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.scss']
})
export class VendeursComponent implements OnInit {
  vendeurall;
  addEditvendeurForm: FormGroup;
  addEditvendeur = false;
  popup: string;
  addvendeur: boolean;
  editvendeur: boolean;

  vendeurdata;
  vendeursdto: Vendeurs;

  onevendeur;
  editvendeurid;

  constructor(private formBuilder: FormBuilder, private router: Router, private vendeursservice: VendeursService ) { }

  ngOnInit() {
    this.addEditvendeurForm = this.formBuilder.group({
        nom: ['', Validators.required],
        contact: ['', Validators.required],
        num_caisse: ['', Validators.required],
    });
    this.getAllVendeurs();
}

get rf() {
    return this.addEditvendeurForm.controls;
}

getAllVendeurs() {
    this.vendeursservice.allvendeurs().subscribe(data => {
        this.vendeurall = data;
    }, error => {
        console.log('erreur', error);
    });
}

addVendeursPopup() {
    this.addvendeur = true;
    this.editvendeur = false;
    this.popup = 'Add New Product';
    this.addEditvendeurForm.reset();
}

addNewVendeurs() {
    this.addEditvendeur = true;
    if (this.addEditvendeurForm.invalid) {
        return;
    }
    this.vendeurdata = this.addEditvendeurForm.value;
    this.vendeursdto = {
        id: 0,
        nom :this.vendeurdata.nom,
        contact:this.vendeurdata.contact,
        num_caisse:this.vendeurdata.num_caisse
    };
    this.vendeursservice.addNewVendeurs(this.vendeursdto).subscribe(data => {
        jQuery('#addEditVendeursModal').modal('toggle');
        this.getAllVendeurs();
    }, err => {
        alert('Some Error Occured');
    });
}

editVendeursPopup(id) {
    this.addvendeur = false;
    this.editvendeur = true;
    this.popup = 'Edit Product';
    this.addEditvendeurForm.reset();
    this.vendeursservice.singleVendeurs(id).subscribe(data => {
        this.onevendeur = data;
        this.editvendeurid = data.id;
        this.addEditvendeurForm.setValue({
          nom: this.vendeurdata.nom,
          contact:this.vendeurdata.contact,
          num_caisse:this.vendeurdata.num_caisse
        });
    });
}

updateVendeurs() {
    this.addEditvendeur = true;
    if (this.addEditvendeurForm.invalid) {
        // alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
        return;
    }
    this.vendeurdata = this.addEditvendeurForm.value;
    this.vendeursdto = {
        id: 0,
        nom: this.vendeurdata.nom,
        contact:this.vendeurdata.contact,
        num_caisse:this.vendeurdata.num_caisse
      
    };
    this.vendeursservice.updateVendeurs(this.editvendeurid, this.vendeursdto).subscribe(data => {
        // console.log(data);
        jQuery('#addEditProductModal').modal('toggle');
        this.getAllVendeurs();
    }, err => {
        alert('Some Error Occured');
    });
}

deleteVendeurs(id) {
    const r = confirm('Do you want to delete the product ID: ' + id + '?');
    if (r === true) {
        this.vendeursservice.deleteVendeurs(id).subscribe(data => {
            console.log('deleted successfully', data);
            this.getAllVendeurs();
        }, err => {
            alert('Some Error Occured');
        });
    } else {
        alert('You pressed Cancel!');
    }

}

}
