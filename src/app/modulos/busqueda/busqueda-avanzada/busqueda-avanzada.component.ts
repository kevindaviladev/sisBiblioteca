import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../servicios/modulos/material.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.scss']
})

export class BusquedaAvanzadaComponent implements OnInit {

  elemento: Array<any>;

  constructor(
    private materialService: MaterialService,
    private router: Router
  ) { }
  
  nombre="Pro";
  year="2019";
  edicion="1";
  autor="Iris";
  tipo="libro";
  idioma="español";
  mostrar = false;

  ngOnInit() {
    // console.log('');
  }

  listar(){
    this.materialService.busquedaAvanzada(this.nombre,this.year,this.edicion,this.autor,this.tipo,this.idioma).then(
      (data) => {
        console.log(data);
        this.elemento = data.recordSet.element;
        console.log(this.elemento);
        if(this.elemento.length>0){
          this.mostrar = true;
        }else{
          this.mostrar = false;
        }
      }
    )
  }

  goToLibroDatos(id:number){
    this.router.navigate(['/modulos/busqueda/libroDatos',{id:id}]);
  }

}
