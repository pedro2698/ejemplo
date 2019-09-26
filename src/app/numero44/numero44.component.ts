import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero44',
  templateUrl: './numero44.component.html',
  styleUrls: ['./numero44.component.css']
})
export class Numero44Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}