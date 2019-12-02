import { Component, OnInit } from '@angular/core';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-realizar-reserva',
  templateUrl: './realizar-reserva.component.html',
  styleUrls: ['./realizar-reserva.component.scss']
})
export class RealizarReservaComponent implements OnInit {
  display='none';
  modalRef: NgbModalRef;
  constructor() { }

  ngOnInit() {
  }
  openModal(){
    this.display='block';
  }
  onCloseHandled(){
    this.display='none';
  }
}
