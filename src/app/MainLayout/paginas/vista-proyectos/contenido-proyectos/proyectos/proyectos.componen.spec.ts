import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectosComponent } from './proyectos.component';
import { Proyecto } from '../../../../../modelos/proyectos.model';
import { ProyectoServices } from '../../../../../servicios/proyecto.services';
import { of } from 'rxjs';

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;
  const proyectos: Proyecto[] = [
    { id:'1' ,nombre: 'Proyecto 1', descripcion: 'Descripción del Proyecto 1', urlImagen: 'imagen1.jpg', color: '#ff0000' },
    { id:'2' ,nombre: 'Proyecto 2', descripcion: 'Descripción del Proyecto 2', urlImagen: 'imagen2.jpg', color: '#00ff00' },
    { id:'3' , nombre: 'Proyecto 3', descripcion: 'Descripción del Proyecto 3', urlImagen: 'imagen3.jpg', color: '#0000ff' }
  ];

  beforeEach(async () => {
    const proyectoServiceSpy = jasmine.createSpyObj('ProyectoServices', ['getProyectos']);
    proyectoServiceSpy.getProyectos.and.returnValue(of(proyectos));

    await TestBed.configureTestingModule({
      declarations: [ ProyectosComponent ],
      providers: [
        { provide: ProyectoServices, useValue: proyectoServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Proyectos');
  });

  it('should display correct number of projects', () => {
    const proyectoElements = fixture.nativeElement.querySelectorAll('app-proyecto');
    expect(proyectoElements.length).toEqual(proyectos.length);
  });
});
