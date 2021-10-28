import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lunettes } from '../core/models/Lunettes';
import { LunettesService } from '../shared/services/lunettes.service';

declare var jQuery: any;
@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html',
  styleUrls: ['./lunettes.component.scss']
})

export class LunettesComponent implements OnInit {

  vendeurall;
  addEditvendeurForm: FormGroup;
  addEditvendeur = false;
  popup: string;
  addvendeur: boolean;
  editvendeur: boolean;

  vendeurdata;
  vendeursdto: Lunettes;

  onevendeur;
  editvendeurid;

  constructor(private formBuilder: FormBuilder, private router: Router, private vendeursservice: LunettesService ) { }

  ngOnInit() {
    this.addEditvendeurForm = this.formBuilder.group({
        marque: ['', Validators.required],
        modele: ['', Validators.required],
        prix: ['', Validators.required],
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
        modele :this.vendeurdata.modele,
        marque:this.vendeurdata.marque,
        prix:this.vendeurdata.prix
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
    this.popup = 'Edit Venderus';
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
        marque: this.vendeurdata.marque,
        modele:this.vendeurdata.modele,
        prix:this.vendeurdata.prix
      
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
