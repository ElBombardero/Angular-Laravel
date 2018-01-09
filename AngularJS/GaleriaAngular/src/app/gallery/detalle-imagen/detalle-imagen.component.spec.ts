import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleImagenComponent } from './detalle-imagen.component';

describe('DetalleImagenComponent', () => {
  let component: DetalleImagenComponent;
  let fixture: ComponentFixture<DetalleImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
