import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class PrestamoService {
    constructor(
        private http: Http
    ){}

    public listarPrestamoAlumno(idAlumno, fechaDesde, fechaHasta,titulo){

        let myData = {
            idAlumno: idAlumno,
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            titulo: titulo
        }

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
          });

        return this.http.post(
            constantes.urlServidor + "/prestamo/listarPrestamoAlumno/", myData, { headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public listarPrestamos(dni,nombre,fechaDesde,fechaHasta,titulo){

        let myData = {
            dni: dni,
            nombre: nombre,
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            titulo: titulo
        }

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
          });

        return this.http.post(
            constantes.urlServidor + "/prestamo/listarPrestamo/", myData, { headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public finalizarPrestamo(idPrestamo,idBibliotecario){

        let myData = {
            idPrestamo: idPrestamo,
            idBibliotecario: idBibliotecario
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + "/prestamo/finalizarPrestamo/", myData, { headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public agregarPrestamo(dni,idEjemplar,idBibliotecario){


        let myData = {
            idBibliotecario: idBibliotecario,
            dni: dni,
            idEjemplar: idEjemplar
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + "/prestamo/agregarPrestamo/", myData, { headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));


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