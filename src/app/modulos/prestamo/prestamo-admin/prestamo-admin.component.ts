import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../../servicios/modulos/prestamo.services';

@Component({
  selector: 'app-prestamo-admin',
  templateUrl: './prestamo-admin.component.html',
  styleUrls: ['./prestamo-admin.component.scss']
})
export class PrestamoAdminComponent implements OnInit {
  
  dni = '';
  nombre = '';
  fechaDesde;
  fechaHasta;
  filtro = '';
  elemento: Array<any>;

  constructor(
    private prestamoService: PrestamoService
  ) { }

  ngOnInit() {
    this.fechaHasta = this.fecha_actual();
    // this.f_desde = this.fecha_pasado();
    this.fechaDesde = '2019-01-01';
    this.buscar();
    console.log("FECHA +7: "+ this.fecha_entrega());
  }

  buscar(){
    this.prestamoService.listarPrestamos(this.dni,this.nombre,this.fechaDesde,this.fechaHasta,this.filtro).then(
      (data) => {
        console.log(data);
        this.elemento = data.recordSet.element;
      }
    )
  }

  finalizarPrestamo(idPrestamo){
    this.prestamoService.finalizarPrestamo(idPrestamo,localStorage.getItem('idUsuario')).then(
      (data) => {
        console.log(data);
        this.buscar();
      }
    )
  }

  fecha_actual(){
    var v_mes, v_dia, v_anio;
    var m = new Date().getMonth()+1;
    var d = new Date().getDate();
    v_anio = new Date().getFullYear();
  
    if(m < 10){
      v_mes = "0" + (new Date().getMonth()+1);
    } else {
      v_mes = (new Date().getMonth()+1);
    }
  
    if(d < 10){
      v_dia = "0" + (new Date().getDate());
    } else {
      v_dia = new Date().getDate();
    }
  
    return v_anio + "-" + v_mes + "-" + v_dia;
  }
  fecha_pasado(){
    var v_mes, v_dia, v_anio;
    var m = new Date().getMonth()+1;
    var d = new Date().getDate();
    v_anio = new Date().getFullYear();
  
    if(m < 10){
      v_mes = "0" + (new Date().getMonth());
    } else {
      v_mes = (new Date().getMonth());
    }
  
    if(d < 10){
      v_dia = "0" + (new Date().getDate());
    } else {
      v_dia = new Date().getDate();
    }
  
    return v_anio + "-" + v_mes + "-" + v_dia;
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
