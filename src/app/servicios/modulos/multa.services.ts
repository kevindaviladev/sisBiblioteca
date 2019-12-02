import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class MultaService {
    constructor(
        private http: Http
    ){}

    public listarMultaAlumno(idAlumno){
        return this.http.get(
            constantes.urlServidor + "/multa/listarMulta/" + idAlumno
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }
}