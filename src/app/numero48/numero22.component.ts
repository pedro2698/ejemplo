import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero22',
  templateUrl: './numero22.component.html',
  styleUrls: ['./numero22.component.css']
})
export class Numero22Component implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}
