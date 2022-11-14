import { TestBed } from '@angular/core/testing';

import { PersonaAsignaturaService } from './persona-asignatura.service';

describe('PersonaAsignaturaService', () => {
  let service: PersonaAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
