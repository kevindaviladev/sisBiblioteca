import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from '../servicios/modulos/alumno.services';
import { BibliotecarioService } from '../servicios/modulos/bibliotecario.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    usuario;
    clave;
    elemento: Array<any>;
    
    constructor(
      private router: Router,
      private alumnoService: AlumnoService,
      private bibliotecarioService: BibliotecarioService
    ) { }

    ngOnInit(){

    }

    
    login(){
      if(this.usuario){

      }
      this.alumnoService.login(this.usuario,this.clave).then(
        (data) => {
          console.log(data);
          this.elemento = data.recordSet.element[0];
          console.log(this.elemento);
          if(this.elemento != null){
          let idUsuario = data.recordSet.element[0].idAlumno;
          let tipoUsuario = data.recordSet.element[0].tipo;

            localStorage.setItem('idUsuario', idUsuario);
            localStorage.setItem('tipoUsuario', tipoUsuario);

            this.router.navigate(['modulos/busqueda/busquedaClasica']);
          }else{
            console.log('NO ES ALUMNO');  
            this.bibliotecarioService.login(this.usuario,this.clave).then(
              (data) => {
                console.log('Data bibliotecario: '+data);
                this.elemento = data.recordSet.element[0];
                console.log(this.elemento);
                if(this.elemento != null){
                let idUsuario = data.recordSet.element[0].idBibliotecario;
                let tipoUsuario = data.recordSet.element[0].tipo;
      
                  localStorage.setItem('idUsuario', idUsuario);
                  localStorage.setItem('tipoUsuario', tipoUsuario);
                  this.router.navigate(['modulos/busqueda/busquedaClasica']);
              }else{
                alert("USUARIO O CLAVE ERRONEA");
              }
            
          }
            )
        }
    }).catch((error) => console.log(error));
    }
    
}