import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class ReservaService {
    constructor(private http: Http){}

    public listarReservaAlumno(idAlumno){
        return this.http.get(
            constantes.urlServidor + "/reserva/listarReservaAlumno/"+idAlumno
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public listarReservas(dni,nombre,fechaDesde,fechaHasta,titulo){
        let myData = {
            dni: dni,
            nombre: nombre,
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            titulo: titulo
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + "/reserva/listarReservas/", myData, { headers: httpHeaders}
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public aceptarReserva(idReserva,idBibliotecario){
        let myData = {
            idReserva: idReserva,
            idBibliotecario: idBibliotecario
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + "/reserva/aceptarReserva/", myData, { headers: httpHeaders}
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));

    }
}