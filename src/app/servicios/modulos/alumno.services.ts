import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class AlumnoService {
    constructor(private http:Http){}

    

    public listarDatos(dni){
        return this.http.get(
            constantes.urlServidor+"/alumno/listarUsuario/"+dni
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public login(usuario,clave){
        let myData = {
            usuario: usuario,
            clave: clave
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + '/alumno/login',myData, {headers: httpHeaders}
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }
}