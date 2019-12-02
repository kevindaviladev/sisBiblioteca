import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDatosComponent } from './libro-datos.component';

describe('LibroDatosComponent', () => {
  let component: LibroDatosComponent;
  let fixture: ComponentFixture<LibroDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
