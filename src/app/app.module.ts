import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Numero21Component } from './header1/numero21.component';
import { ConocemosComponent } from './conocemos/conocemos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NAnterioresComponent } from './n-anteriores/n-anteriores.component';
import { HeaderComponent } from './header/header.component';
import { Numero22Component } from './numero48/numero22.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
import { Numero43Component } from './numero43/numero43.component';
import { Numero40Component } from './numero40/numero40.component';
import { Numero41Component } from './numero41/numero41.component';
import { Numero29Component } from './numero29/numero29.component';
import { Numero28Component } from './numero28/numero28.component';
import { Numero23Component } from './numero23/numero23.component';
import { Numero44Component } from './numero44/numero44.component';
import { Numero45Component } from './numero45/numero45.component';
import { Numero46Component } from './numero46/numero46.component';

import { Numero47Component } from './numero47/numero47.component';


@NgModule({
  declarations: [
    AppComponent,
    Numero21Component,
    ConocemosComponent,
    ContactanosComponent,
    NAnterioresComponent,
    HeaderComponent,
    Numero22Component,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminComponent,
    Numero43Component,
    Numero40Component,
    Numero41Component,
    Numero29Component,
    Numero28Component,
    Numero47Component,
    Numero23Component,
    Numero45Component,
    Numero44Component,
    Numero46Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
