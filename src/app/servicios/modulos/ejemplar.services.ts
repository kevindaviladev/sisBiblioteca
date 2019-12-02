import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class EjemplarService {
    constructor(private http: Http){}

    public listarEjemplaresDisponibles(idMaterial:number){
        let myData = {
            idMaterial: idMaterial
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
          });
        
          return this.http.post(
              constantes.urlServidor + "/ejemplar/listarEjemplaresDisponibles/", myData, {headers: httpHeaders}
          ).toPromise()
          .then((data) => data.json())
          .catch((error) => console.log(error));
    }

    public registrarReserva(idEjemplar,idAlumno,fecha){
        let myData = {
            idEjemplar : idEjemplar,
            idAlumno : idAlumno,
            fecha: fecha
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + "/ejemplar/registrarReserva",myData,{headers: httpHeaders}
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }
}