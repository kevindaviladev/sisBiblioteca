import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../../servicios/modulos/prestamo.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  dni='77470335';
  idEjemplar=1;
  fechaEntrega;

  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fechaEntrega = this.fecha_entrega();
  }

  agregarPrestamo(){
    this.prestamoService.agregarPrestamo(this.dni,this.idEjemplar,localStorage.getItem('idUsuario')).then(
      (data) => {
        console.log(data);
        this.router.navigate(['modulos/prestamo/historial-admin']);
      }
    )
  }

  fecha_entrega(){
    var v_mes, v_dia, v_anio;
    var m = new Date().getMonth()+1;
    var d = new Date().getDate()+7;
    v_anio = new Date().getFullYear();
  
    if(m < 10){
      v_mes = "0" + (new Date().getMonth()+1);
    } else {
      v_mes = (new Date().getMonth()+1);
    }
  
    if(d+7 < 10){
      v_dia = "0" + (new Date().getDate()+7);
    } else {
      v_dia = new Date().getDate()+7;
    }
  
    return v_anio + "-" + v_mes + "-" + v_dia;
  }
}
