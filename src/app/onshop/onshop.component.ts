import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-onshop',
  templateUrl: './onshop.component.html',
  styleUrls: ['./onshop.component.css']
})
export class OnshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
