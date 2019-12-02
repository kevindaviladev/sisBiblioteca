import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealizarReservaComponent } from './realizar-reserva/realizar-reserva.component';
import { HistorialComponent } from './historial/historial.component';

//RUTAS
import { routing } from './reserva.routing';
import { ReservaService } from '../../servicios/modulos/reserva.services';
import { HistorialAdminComponent } from './historial-admin/historial-admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RealizarReservaComponent,HistorialComponent, HistorialAdminComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  providers:[
    ReservaService
  ]
})
export class ReservaModule { }
