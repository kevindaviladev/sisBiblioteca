import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaClasicaComponent } from './busqueda-clasica.component';

describe('BusquedaClasicaComponent', () => {
  let component: BusquedaClasicaComponent;
  let fixture: ComponentFixture<BusquedaClasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaClasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaClasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
