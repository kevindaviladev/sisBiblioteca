import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class BibliotecarioService {
    constructor(
        private http: Http
    ){}

    public login(usuario,clave){
        let myData = {
            usuario: usuario,
            clave: clave
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
        });

        return this.http.post(
            constantes.urlServidor + '/bibliotecario/login',myData, { headers: httpHeaders}
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }
}