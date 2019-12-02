import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';
//import { ConsoleReporter } from 'jasmine';


// declare interface RouteInfo {
//     path: string;
//     title: string;
//     icon: string;
//     class: string;
// }

export let ROUTES: any[];

// export const ROUTES: RouteInfo[] = [
//     { path: 'login', title: 'Login',  icon: 'design_app', class: '' },

// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private sidebarPlantilla: any[];
  toggleSideBar = true;


  constructor( private router: Router) { }

  ngOnInit() {
    ROUTES = [];
    this.dibujarPanel();
    // console.log(this.menuItems);
 
}

  dibujarPanel(){
    //   console.log('dibujarPanel inicia');
    if(localStorage.getItem('tipoUsuario')=='A'){
        //ALUMNO
        this.sidebarPlantilla = [
            { path: '', title: 'Busqueda',  icon:'design_app', class: '', children:[
                {path: 'busqueda/busquedaClasica', title: 'Busqueda clasica', icon: 'ui-1_bell-53'},
                {path: 'busqueda/busquedaAvanzada', title: 'Busqueda avanzada', icon: 'ui-1_bell-53'}
            ] },
            { path: '', title: 'Reserva', icon:'design_app', class:'', children:[
                // {path:'reserva/realizarReserva',title:'Realizar reserva', icon:'ui-1_bell-53'},
                {path:'reserva/historial',title:'Historial', icon:'ui-1_bell-53'},
            ]},
            { path: '', title:'Prestamo', icon:'design_app',class:'', children:[
                {path:'prestamo/historial', title:'Historial', icon:'ui-1_bell-53'},
            ]},
            { path: 'perfil', title: 'Perfil',  icon:'design_app', class: '' },
            { path: 'penalizaciones', title: 'Penalizaciones',  icon:'design_app', class: '' },
        ];
    }else{
        //BIBLIOTECARIO
        this.sidebarPlantilla = [
            { path: '', title: 'Busqueda',  icon:'design_app', class: '', children:[
                {path: 'busqueda/busquedaClasica', title: 'Busqueda clasica', icon: 'ui-1_bell-53'},
                {path: 'busqueda/busquedaAvanzada', title: 'Busqueda avanzada', icon: 'ui-1_bell-53'}
            ] },
            { path: '', title: 'Reserva', icon:'design_app', class:'', children:[
                //AQUI VA HISTORIAL DE RESERVA DE TODOS
                // {path:'reserva/realizarReserva',title:'Realizar reserva', icon:'ui-1_bell-53'},
                {path:'reserva/historial-admin',title:'Historial', icon:'ui-1_bell-53'},
            ]},
            { path: '', title:'Prestamo', icon:'design_app',class:'', children:[
                //AQUÍ VAN: HACER UN PRESTAMO, LISTAR PRESTAMOS BIBLIO
                {path:'prestamo/agregarPrestamo', title:'Nuevo', icon:'ui-1_bell-53'},
                {path:'prestamo/historial-admin', title:'Historial', icon:'ui-1_bell-53'},
            ]},
            // { path: 'perfil', title: 'Perfil',  icon:'design_app', class: '' },
            // { path: 'penalizaciones', title: 'Penalizaciones',  icon:'design_app', class: '' },
        ];
    }
 
    

    for (let m = 0; m < this.sidebarPlantilla.length; ++m) {
        this.generarSidebar(this.sidebarPlantilla[m], ROUTES);
    }
    
    // console.log(ROUTES);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // console.log('dibujarPanel Fin');
}

isMobileMenu() {
}

mandaInicio() {
    this.router.navigate(['/modulos/inicio']);
}

private generarSidebar(menu, sidebar: any[]) {

    if (menu.deleted == null) {
        let menuNuevo = {
            path: menu.path,
            title: menu.title,
            icon: menu.icon,
            url: menu.url,
            enabled: menu.enabled
        };

        sidebar.push(menuNuevo);

        if (menu.children != null) {
            menuNuevo['children'] = [];

            for (let h = 0; h < menu.children.length; ++h) {
                this.generarSidebar(menu.children[h], menuNuevo['children']);
            }
        }
    }
}
}
