import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero23',
  templateUrl: './numero23.component.html',
  styleUrls: ['./numero23.component.css']
})
export class Numero23Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}