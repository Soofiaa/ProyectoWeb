import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaContrasenaComponent } from './nueva-contrasena.component';

describe('NuevaContrasenaComponent', () => {
  let component: NuevaContrasenaComponent;
  let fixture: ComponentFixture<NuevaContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
