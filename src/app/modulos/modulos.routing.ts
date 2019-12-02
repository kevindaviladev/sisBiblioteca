import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from './modulos.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PenalizacionesComponent } from './penalizaciones/penalizaciones.component';

export const routes: Routes = [
    {
        path: 'modulos',
        component: ModulosComponent,
        children: [
            { path:'dashboard', loadChildren: './prueba/prueba.module#PruebaModule'},
            { path:'busqueda', loadChildren: './busqueda/busqueda.module#BusquedaModule'},
            { path:'reserva', loadChildren: './reserva/reserva.module#ReservaModule'},
            { path:'prestamo', loadChildren: './prestamo/prestamo.module#PrestamoModule'},
            { path:'perfil', component: PerfilComponent},
            { path:'penalizaciones', component: PenalizacionesComponent}
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);