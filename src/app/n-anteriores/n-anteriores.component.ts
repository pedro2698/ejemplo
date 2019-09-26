import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-anteriores',
  templateUrl: './n-anteriores.component.html',
  styleUrls: ['./n-anteriores.component.css']
})
export class NAnterioresComponent implements OnInit {
isCollapsed : boolean = true;

  constructor() { }
toogleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

}
