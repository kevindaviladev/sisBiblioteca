import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ROUTING
import { routing } from './login.routing';
//COMPONENT
import { LoginComponent } from './login.component';
import { AlumnoService } from '../servicios/modulos/alumno.services';
import { FormsModule } from '@angular/forms';
import { BibliotecarioService } from '../servicios/modulos/bibliotecario.services';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  providers:[
    AlumnoService,
    BibliotecarioService
  ]
})
export class LoginModule { }
