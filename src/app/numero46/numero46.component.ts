import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero46',
  templateUrl: './numero46.component.html',
  styleUrls: ['./numero46.component.css']
})
export class Numero46Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}