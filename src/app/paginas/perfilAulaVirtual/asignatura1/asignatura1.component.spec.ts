import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignatura1Component } from './asignatura1.component';

describe('Asignatura1Component', () => {
  let component: Asignatura1Component;
  let fixture: ComponentFixture<Asignatura1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asignatura1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asignatura1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
