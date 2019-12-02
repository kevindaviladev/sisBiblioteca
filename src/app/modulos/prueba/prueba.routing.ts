import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

//COMPONENTES DEL MODULO

let routes: Route[] = [
    {
        path: '',
        children:[
            {path:'', component: DashboardComponent},
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);