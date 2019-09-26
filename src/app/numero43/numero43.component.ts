import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero43',
  templateUrl: './numero43.component.html',
  styleUrls: ['./numero43.component.css']
})

export class Numero43Component implements OnInit {
  isCollapsed : boolean = true;

  constructor() { }
  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
