import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = 'assets/bg-image.jpg' 
  imageAlt = 'iPhone'
  constructor() { }

  ngOnInit() {
  }

}
