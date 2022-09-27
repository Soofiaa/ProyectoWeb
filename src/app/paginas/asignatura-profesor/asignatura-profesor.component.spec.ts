import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaProfesorComponent } from './asignatura-profesor.component';

describe('AsignaturaProfesorComponent', () => {
  let component: AsignaturaProfesorComponent;
  let fixture: ComponentFixture<AsignaturaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
