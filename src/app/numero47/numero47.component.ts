import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero47',
  templateUrl: './numero47.component.html',
  styleUrls: ['./numero47.component.css']
})
export class Numero47Component implements OnInit {
  isCollapsed : boolean = true;

  constructor() { }
  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}