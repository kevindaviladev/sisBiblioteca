import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaClasicaComponent } from './busqueda-clasica/busqueda-clasica.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';

//ROUTING
import { routing } from './busqueda.routing';
import { MaterialService } from '../../servicios/modulos/material.services';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LibroDatosComponent } from './libro-datos/libro-datos.component';
import { EjemplarService } from '../../servicios/modulos/ejemplar.services';
import { BusquedaComponent } from './busqueda.component';
@NgModule({
  declarations: [
    BusquedaComponent,
    BusquedaClasicaComponent, 
    BusquedaAvanzadaComponent, 
    LibroDatosComponent
  ],
  imports: [
    CommonModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers:[
    MaterialService,
    EjemplarService
  ]
})
export class BusquedaModule { }
