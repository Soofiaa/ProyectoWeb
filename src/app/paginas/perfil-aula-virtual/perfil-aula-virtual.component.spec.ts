import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAulaVirtualComponent } from './perfil-aula-virtual.component';

describe('PerfilAulaVirtualComponent', () => {
  let component: PerfilAulaVirtualComponent;
  let fixture: ComponentFixture<PerfilAulaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAulaVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAulaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
