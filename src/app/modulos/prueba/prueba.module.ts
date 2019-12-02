import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts/ng2-charts'
import { PruebaComponent } from './prueba.component';


//ROUTING
import { routing } from './prueba.routing';

@NgModule({
  declarations: [
    PruebaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    routing
  ]
})
export class PruebaModule { }
