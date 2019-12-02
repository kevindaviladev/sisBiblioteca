import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//COMPONENTES
import { BusquedaClasicaComponent } from './busqueda-clasica/busqueda-clasica.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { LibroDatosComponent } from './libro-datos/libro-datos.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {path:'busquedaClasica', component: BusquedaClasicaComponent},
            {path:'busquedaAvanzada', component: BusquedaAvanzadaComponent},
            {path:'libroDatos', component: LibroDatosComponent},            
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);