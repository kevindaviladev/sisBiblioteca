import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../../servicios/modulos/prestamo.services';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  elemento: Array<any>;
  f_desde;
  f_hasta;
  titulo = '';

  constructor(
    private prestamoService: PrestamoService
  ) { }

  ngOnInit() {
    
    this.f_hasta = this.fecha_actual();
    // this.f_desde = this.fecha_pasado();
    this.f_desde = '2019-01-01';
    this.buscar();
  }

  buscar(){
    this.prestamoService.listarPrestamoAlumno(localStorage.getItem('idUsuario'),this.f_desde,this.f_hasta,this.titulo).then(
      (data) =>{
        console.log(data);
        this.elemento = data.recordSet.element;
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

}
