import { Component, OnInit } from '@angular/core';
//SERVICIO
import { AlumnoService } from '../../servicios/modulos/alumno.services';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  elemento: Array<any>;

  constructor(private alumnoService: AlumnoService) { }

  foto;
  dni;
  correo;
  telefono;
  fecNac;
  nombres;
  apellidoPaterno;
  apellidoMaterno;
  direccion;

  ngOnInit() {
    this.alumnoService.listarDatos('77470335').then(
      (data) => {
        console.log(data);
        // this.elemento = data.recordSet.element;
        this.dni = data.recordSet.element[0].dni;
        this.correo = data.recordSet.element[0].correo;
        this.telefono = data.recordSet.element[0].telefono;
        this.fecNac = data.recordSet.element[0].fechaNac;
        this.nombres = data.recordSet.element[0].nombres;
        this.apellidoPaterno = data.recordSet.element[0].apellidoPaterno;
        this.apellidoMaterno = data.recordSet.element[0].apellidoMaterno;
        this.direccion = data.recordSet.element[0].direccion;
        // console.log(this.elemento[0].dni);
      }
    );


  }

  listar(){
    this.alumnoService.listarDatos('77470335').then(
      (data) => {
        console.log(data);
        this.elemento = data.recordSet.element;
        this.dni = data.recordSet.element.dni;
        this.correo = data.recordSet.element.correo;
        this.telefono = data.recordSet.element.telefono;
        this.fecNac = data.recordSet.element.fecNac;
        this.nombres = data.recordSet.element.nombres;
        this.apellidoPaterno = data.recordSet.element.apellidoPaterno;
        this.apellidoMaterno = data.recordSet.element.apellidoMaterno;
        this.direccion = data.recordSet.element.direccion;
      }
    )
  }
}
