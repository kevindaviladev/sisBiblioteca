import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HistorialComponent } from './historial/historial.component';
import { PrestamoAdminComponent } from './prestamo-admin/prestamo-admin.component';
import { AgregarComponent } from './agregar/agregar.component';
//COMPONENTES

export const routes: Routes = [
    {
        path: '',
        children: [
            {path:'historial', component: HistorialComponent}, 
            {path:'historial-admin', component: PrestamoAdminComponent},
            {path:'agregarPrestamo', component: AgregarComponent}

        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);