import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAulaVirtualProfesorComponent } from './ingreso-aula-virtual-profesor.component';

describe('IngresoAulaVirtualProfesorComponent', () => {
  let component: IngresoAulaVirtualProfesorComponent;
  let fixture: ComponentFixture<IngresoAulaVirtualProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoAulaVirtualProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoAulaVirtualProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
