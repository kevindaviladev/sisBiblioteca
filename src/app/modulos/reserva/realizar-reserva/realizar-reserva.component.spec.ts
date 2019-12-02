import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarReservaComponent } from './realizar-reserva.component';

describe('RealizarReservaComponent', () => {
  let component: RealizarReservaComponent;
  let fixture: ComponentFixture<RealizarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
