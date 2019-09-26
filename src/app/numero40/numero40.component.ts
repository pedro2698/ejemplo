import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero40',
  templateUrl: './numero40.component.html',
  styleUrls: ['./numero40.component.css']
})

export class Numero40Component implements OnInit {
  isCollapsed : boolean = true;

  constructor() { }
  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
