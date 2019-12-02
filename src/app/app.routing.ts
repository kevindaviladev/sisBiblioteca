import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

//MODULOS IMPORTADOS


const routes: Routes =[
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
    
  }
];
// path: '', component: LoginComponent

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
