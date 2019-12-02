import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalizacionesComponent } from './penalizaciones.component';

describe('PenalizacionesComponent', () => {
  let component: PenalizacionesComponent;
  let fixture: ComponentFixture<PenalizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
