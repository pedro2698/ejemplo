import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero45',
  templateUrl: './numero45.component.html',
  styleUrls: ['./numero45.component.css']
})
export class Numero45Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}