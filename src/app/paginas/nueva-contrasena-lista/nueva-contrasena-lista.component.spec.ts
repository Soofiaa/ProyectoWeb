import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaContrasenaListaComponent } from './nueva-contrasena-lista.component';

describe('NuevaContrasenaListaComponent', () => {
  let component: NuevaContrasenaListaComponent;
  let fixture: ComponentFixture<NuevaContrasenaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaContrasenaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaContrasenaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
