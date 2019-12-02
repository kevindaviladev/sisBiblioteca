
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';



@Component({
    selector: 'busqueda-root',
    templateUrl: './busqueda.html',
    styleUrls: ['./busqueda.scss']
})
export class BusquedaComponent implements OnInit {

    constructor( public location: Location, private router: Router){}

    ngOnInit() {

    } 
}