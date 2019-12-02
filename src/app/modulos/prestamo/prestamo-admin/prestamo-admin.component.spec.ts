import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoAdminComponent } from './prestamo-admin.component';

describe('PrestamoAdminComponent', () => {
  let component: PrestamoAdminComponent;
  let fixture: ComponentFixture<PrestamoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
