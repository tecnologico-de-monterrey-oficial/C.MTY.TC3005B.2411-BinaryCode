import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectoTarjetaComponent } from './proyecto-tarjeta.component';
import { By } from '@angular/platform-browser';
import { Proyecto } from '../../../../modelos/proyectos.model';

describe('ProyectoTarjetaComponent', () => {
  let component: ProyectoTarjetaComponent;
  let fixture: ComponentFixture<ProyectoTarjetaComponent>;
  const proyecto: Proyecto = {
    id: '1',
    nombre: 'Proyecto de ejemplo',
    descripcion: 'Descripción del proyecto de ejemplo',
    urlImagen: 'imagen.jpg',
    color: '#ff0000' // Color de ejemplo
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoTarjetaComponent);
    component = fixture.componentInstance;
    component.proyecto = proyecto;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct project name', () => {
    const nameLabelElement = fixture.nativeElement.querySelector('.name-label');
    expect(nameLabelElement.textContent).toContain(proyecto.nombre);
  });

  it('should display correct project description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('.description');
    expect(descriptionElement.textContent).toContain(proyecto.descripcion);
  });

  it('should apply correct background color to image container', () => {
    const imageContainerElement = fixture.nativeElement.querySelector('.image-container');
    expect(imageContainerElement.style.backgroundColor).toBe(proyecto.color);
  });

  it('should open dropdown menu when options button is clicked', () => {
    const optionsButtonElement = fixture.nativeElement.querySelector('.options-button');
    optionsButtonElement.click();
    fixture.detectChanges();
    const dropdownMenuElement = fixture.nativeElement.querySelector('.ant-dropdown-menu');
    expect(dropdownMenuElement).toBeTruthy();
  });
});
