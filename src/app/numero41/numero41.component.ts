import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero41',
  templateUrl: './numero41.component.html',
  styleUrls: ['./numero41.component.css']
})

export class Numero41Component implements OnInit {
  isCollapsed : boolean = true;

  constructor() { }
  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }
}
