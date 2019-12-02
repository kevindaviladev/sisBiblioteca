import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './modulos.routing';
import { ModulosComponent } from './modulos.component';
import { ChartsModule } from 'ng2-charts/ng2-charts'
//COMPONENTS FNS
import { NavbarModule } from './../components/navbar/navbar.module';
import { FooterModule } from './../components/footer/footer.module';
import { SidebarModule } from './../components/sidebar/sidebar.module';
import { RealizarReservaComponent } from './reserva/realizar-reserva/realizar-reserva.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PenalizacionesComponent } from './penalizaciones/penalizaciones.component';

import { AlumnoService } from '../servicios/modulos/alumno.services';
import { HttpModule } from '@angular/http';
import { MultaService } from '../servicios/modulos/multa.services';



//MODALS

//SERVICIOS PARA MODALS

//Valitadors Directive
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        NavbarModule,
        FooterModule,
        SidebarModule,
        ChartsModule,
        HttpModule
    ],
    declarations: [
        ModulosComponent,
        PerfilComponent,
        PenalizacionesComponent,
    ],
    entryComponents: [
    ],
    providers: [
        AlumnoService,
        MultaService
    ]
})
export class ModulesModule {
}