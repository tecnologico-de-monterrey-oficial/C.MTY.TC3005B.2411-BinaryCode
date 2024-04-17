import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ArchivoFilaComponent } from './archivo-fila.component';
import { Archivo } from '../../../../modelos/archivo.model';

describe('ArchivoFilaComponent', () => {
  let component: ArchivoFilaComponent;
  let fixture: ComponentFixture<ArchivoFilaComponent>;
  let archivo: Archivo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivoFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoFilaComponent);
    component = fixture.componentInstance;
    archivo = {
      id: '1',
      nombre: 'archivo.txt',
      favorito: false,
      icono: { nombre: 'file', color: 'black' },
      propietario: {id: '1', nombre: 'Usuario', imagenUrl: 'imagen.png' },
      etiquetas: [{id: '1' ,nombre: 'etiqueta1', color: 'blue' }],
      fecha: '2024-04-13'
    };
    component.archivo = archivo
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct file name', () => {
    const nombreElement = fixture.nativeElement.querySelector('.texto');
    expect(nombreElement.textContent).toContain(archivo.nombre);
  });

  it('should toggle favorite status when star icon is clicked', () => {
    const starIcon = fixture.debugElement.query(By.css('.estrella-llena'));
    starIcon.triggerEventHandler('click', null);
    expect(component.archivo.favorito).toBeTruthy();
  });

  it('should call onFileClick method when file card is clicked', () => {
    spyOn(component, 'onFileClick');
    const fileCard = fixture.nativeElement.querySelector('.file-card');
    fileCard.click();
    expect(component.onFileClick).toHaveBeenCalled();
  });
});
