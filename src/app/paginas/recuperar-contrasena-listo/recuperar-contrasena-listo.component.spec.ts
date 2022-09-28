import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContrasenaListoComponent } from './recuperar-contrasena-listo.component';

describe('RecuperarContrasenaListoComponent', () => {
  let component: RecuperarContrasenaListoComponent;
  let fixture: ComponentFixture<RecuperarContrasenaListoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarContrasenaListoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarContrasenaListoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
