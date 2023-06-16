import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarUsuarioComponent } from './agregar-editar-usuario.component';

describe('AgregarEditarUsuarioComponent', () => {
  let component: AgregarEditarUsuarioComponent;
  let fixture: ComponentFixture<AgregarEditarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarUsuarioComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
