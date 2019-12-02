import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//RUTAS
import { routing } from './prestamo.routing';
import { HistorialComponent } from './historial/historial.component';
import { PrestamoAdminComponent } from './prestamo-admin/prestamo-admin.component'
import { PrestamoService } from '../../servicios/modulos/prestamo.services';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
@NgModule({
  declarations: [HistorialComponent, PrestamoAdminComponent, AgregarComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  providers:[
    PrestamoService
  ]
})
export class PrestamoModule { }
