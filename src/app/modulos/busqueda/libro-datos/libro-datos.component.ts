import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../servicios/modulos/material.services';
import { ActivatedRoute, Router } from '@angular/router';
import { EjemplarService } from '../../../servicios/modulos/ejemplar.services';

//LIBS
import * as moment from 'moment'

@Component({
  selector: 'app-libro-datos',
  templateUrl: './libro-datos.component.html',
  styleUrls: ['./libro-datos.component.scss']
})
export class LibroDatosComponent implements OnInit {

  constructor(
      private materialService: MaterialService,
      private ejemplarService: EjemplarService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  id;
  elemento: Array<any>;
  titulo: string;
  autor;
  anho;
  edicion;
  descripcion;
  portada;
  usuario; 

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
    console.log(this.id);

    this.usuario = localStorage.getItem('tipoUsuario');

    this.materialService.listarDatosLibro(this.id).then(
      (data) => {
        console.log(data);
        this.titulo = data.recordSet.element[0].titulo;
        // console.log(this.titulo);
        this.autor = data.recordSet.element[0].autor;
        this.anho = data.recordSet.element[0].year;
        this.edicion = data.recordSet.element[0].edicicion;
        this.descripcion = data.recordSet.element[0].descripcion;
        this.portada = data.recordSet.element[0].portada;
      }
    );
    
    this.ejemplarService.listarEjemplaresDisponibles(this.id).then(
      (data) => {
        // console.log(data);
        this.elemento = data.recordSet.element;
        // console.log(this.elemento);
      }
    )
  }

  public reservarEjemplar(idEjemplar){
    console.log(idEjemplar);
    let fecha =  moment().format('YYYY-MM-DD');
    // console.log(fecha);
    this.ejemplarService.registrarReserva(idEjemplar,localStorage.getItem('idUsuario'),fecha).then(
      (data) => {
        this.router.navigate(['modulos/reserva/historial']);
      }
    )

  }
}
