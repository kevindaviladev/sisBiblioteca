import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../servicios/modulos/reserva.services';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  elemento: Array<any>;
  constructor(
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    this.reservaService.listarReservaAlumno(localStorage.getItem('idUsuario')).then(
      (data) => {
        console.log(data);
        this.elemento = data.recordSet.element;
      }
    )
  }

}
