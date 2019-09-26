import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import {ContactanosComponent} from './contactanos/contactanos.component';
import{ConocemosComponent} from './conocemos/conocemos.component';
import {Numero21Component} from './header1/numero21.component';
import {NAnterioresComponent} from './n-anteriores/n-anteriores.component';
import{Numero22Component} from './numero48/numero22.component';
import{RegisterComponent} from './components/users/register/register.component';
import {LoginComponent} from './components/users/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {Numero23Component} from './numero23/numero23.component';

import {Numero28Component} from './numero28/numero28.component';
import {Numero29Component} from './numero29/numero29.component';
import {Numero43Component} from './numero43/numero43.component';
import {Numero40Component} from './numero40/numero40.component';
import {Numero41Component} from './numero41/numero41.component';
import {Numero44Component} from './numero44/numero44.component';

import {Numero45Component} from './numero45/numero45.component';

import {Numero46Component} from './numero46/numero46.component';
import {Numero47Component} from './numero47/numero47.component';


const routes: Routes = [
  {
    path:  'Admin',
    component:  AdminComponent
},
 
  {
    path:  'Login',
    component:  LoginComponent
},
  {
    path:  'Register',
    component:  RegisterComponent
},
  
  {
    path:  'Numero22',
    component:  Numero22Component
},
{
  path:  'Numero29',
  component:  Numero29Component
},
{
  path:  'Numero28',
  component:  Numero28Component
},
  
  {
    path:  'Numero21',
    component:  Numero21Component
},
{
  path:  'Numero23',
  component:  Numero23Component
},

{
  path:  'Numero40',
  component:  Numero40Component
},

{
  path:  'Numero41',
  component:  Numero41Component
},
{
  path:  'Numero43',
  component:  Numero43Component
},
{
  path:  'Numero44',
  component:  Numero44Component
},
{
  path:  'Numero45',
  component:  Numero45Component
},
{
  path:  'Numero46',
  component:  Numero46Component
},
{
  path:  'Numero47',
  component:  Numero47Component
},


    {
    path:  'Conocenos',
    component:  ConocemosComponent
},


{
  path:  'Contactanos',
  component:  ContactanosComponent
},
{
path:  'Anteriores',
component:  NAnterioresComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }