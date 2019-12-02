import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as constantes from '../../servicios/global/constantes';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class MaterialService {
    constructor(private http:Http){}

    public busquedaClasica(filtro){

        let myData = {
            filtro: filtro
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
          });

        return this.http.post(
            constantes.urlServidor+"/material/busquedaSimple/", myData,{ headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public busquedaAvanzada(filtro,year,edicion,autor,tipo,idioma){
        
        let myData = {
            filtro: filtro,
            year: year,
            autor: autor,
            tipo: tipo,
            edicion: edicion,
            idioma: idioma
        };

        const httpHeaders = new Headers ({
            'Content-Type': '	application/json; charset=utf-8',
          });
        
          return this.http.post(
            constantes.urlServidor+"/material/busquedaAvanzada/", myData,{ headers: httpHeaders }
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log('ERROOOR: '+error));
    }

    public buscar(){
        return this.http.get(
            constantes.urlServidor+"/material/buscar"
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }

    public listarDatosLibro(id){
        return this.http.get(
            constantes.urlServidor+"/material/listarDatosLibro/"+id
        ).toPromise()
        .then((data) => data.json())
        .catch((error) => console.log(error));
    }
}