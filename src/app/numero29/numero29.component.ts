import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero29',
  templateUrl: './numero29.component.html',
  styleUrls: ['./numero29.component.css']
})
export class Numero29Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}
