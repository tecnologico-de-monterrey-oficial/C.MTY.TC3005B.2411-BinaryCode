import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoProyectosComponent } from './contenido-proyectos.component';

describe('ProyectosComponent', () => {
  let component: ContenidoProyectosComponent;
  let fixture: ComponentFixture<ContenidoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenidoProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
