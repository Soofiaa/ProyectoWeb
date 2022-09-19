import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAulaVirtualComponent } from './ingreso-aula-virtual.component';

describe('IngresoAulaVirtualComponent', () => {
  let component: IngresoAulaVirtualComponent;
  let fixture: ComponentFixture<IngresoAulaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoAulaVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoAulaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
