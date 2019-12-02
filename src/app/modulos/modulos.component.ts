
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

// import { Subscription } from 'rxjs/Subscription';
// import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

@Component({
    selector: 'modulos-root',
    templateUrl: './modulos.html',
    styleUrls: ['./modulos.scss']
})
export class ModulosComponent implements OnInit {
    bandera: boolean = false;
    // private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    
    constructor( public location: Location, private router: Router){}

    ngOnInit() {
         console.log("Dentro de nGOnInit");

    } 
}
