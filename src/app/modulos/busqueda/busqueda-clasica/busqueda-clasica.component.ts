import { Component, OnInit } from '@angular/core';
//SERVICIO
import { MaterialService } from '../../../servicios/modulos/material.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-busqueda-clasica',
  templateUrl: './busqueda-clasica.component.html',
  styleUrls: ['./busqueda-clasica.component.scss']
})
export class BusquedaClasicaComponent implements OnInit {

  elemento: Array<any>;

  constructor(
      private materialService: MaterialService,
      private router: Router
  ) { }

  filtro = null;
  mostrar = false;
  vacio = false;

  ngOnInit() {
    // console.log(this.filtro);
    // this.listar(this.filtro);
    // this.listarTodos();
  }

  listar(){
    if(this.filtro=="" || this.filtro==null){
      alert("Introduzca un valor de búsqueda");
      return;
    }
    this.materialService.busquedaClasica(this.filtro).then(
      (data:any) => {
        // console.log(data);
        this.elemento = data.recordSet.element;
        console.log(this.elemento);
        if(this.elemento.length>0){
          this.mostrar = true;
          this.vacio = false;
        }else{
          this.mostrar = false;
          this.vacio = true;
        }
      }
    )
  }

  listarTodos(){
    this.materialService.buscar().then(
      (data:any) => {
        console.log(data);
      }
    )
  }

  goToLibroDatos(id:number){
    this.router.navigate(['/modulos/busqueda/libroDatos',{id:id}]);
  }

}
