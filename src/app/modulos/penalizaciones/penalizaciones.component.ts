import { Component, OnInit } from '@angular/core';
import { MultaService } from '../../servicios/modulos/multa.services';

@Component({
  selector: 'app-penalizaciones',
  templateUrl: './penalizaciones.component.html',
  styleUrls: ['./penalizaciones.component.scss']
})
export class PenalizacionesComponent implements OnInit {

  elemento: Array<any>;

  constructor(
    private MultaService: MultaService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.MultaService.listarMultaAlumno(localStorage.getItem('idUsuario')).then(
      (data) => {
        console.log(data);
        this.elemento = data.recordSet.element;
      }
    )
  }

}
