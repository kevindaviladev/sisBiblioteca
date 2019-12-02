import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//COMPONENTES
import { HistorialComponent } from './historial/historial.component';
import { RealizarReservaComponent } from './realizar-reserva/realizar-reserva.component';
import { HistorialAdminComponent } from './historial-admin/historial-admin.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {path:'realizarReserva', component: RealizarReservaComponent},
            {path:'historial', component: HistorialComponent}, 
            {path:'historial-admin', component: HistorialAdminComponent}, 
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);