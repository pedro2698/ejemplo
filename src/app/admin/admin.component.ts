import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@Input('email') email :string; 
  constructor() { 

  }

  ngOnInit() {
  }

}
