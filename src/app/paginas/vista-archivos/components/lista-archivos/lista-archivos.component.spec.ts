import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaArchivosComponent } from './lista-archivos.component';
import { Archivo } from '../../../../modelos/archivo.model';
import { Carpeta } from '../../../../modelos/carpeta.model';
import { CarpetaFilaComponent } from '../carpeta-fila/carpeta-fila.component';
import { ArchivoFilaComponent } from '../archivo-fila/archivo-fila.component';
import { Etiqueta } from '../../../../modelos/etiqueta.model';
import { By } from '@angular/platform-browser';

describe('ListaArchivosComponent', () => {
  let component: ListaArchivosComponent;
  let fixture: ComponentFixture<ListaArchivosComponent>;
  const archivos: Archivo[] = [
    { id: '1',nombre: 'archivo1.txt', favorito: false, icono: { nombre: 'file', color: 'black' }, propietario: { id: '1', nombre: 'Usuario', imagenUrl: 'imagen.png' }, etiquetas: [{ id: '1', nombre: 'etiqueta1', color: 'blue' }], fecha: '2024-04-13' },
    { id: '2',nombre: 'archivo2.txt', favorito: true, icono: { nombre: 'file', color: 'black' }, propietario: { id: '2', nombre: 'Usuario', imagenUrl: 'imagen.png' }, etiquetas: [{ id: '2', nombre: 'etiqueta2', color: 'red' }], fecha: '2024-04-14' }
  ];
  const carpetas: Carpeta[] = [
    {id:'1', nombre: 'Carpeta1', color: 'blue', fecha: '2024-04-13' },
    { id: '2', nombre: 'Carpeta2', color: 'green', fecha: '2024-04-14' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArchivosComponent, CarpetaFilaComponent, ArchivoFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArchivosComponent);
    component = fixture.componentInstance;
    component.archivos = archivos;
    component.carpetas = carpetas;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of file and folder rows', () => {
    const carpetaRows = fixture.debugElement.queryAll(By.directive(CarpetaFilaComponent));
    const archivoRows = fixture.debugElement.queryAll(By.directive(ArchivoFilaComponent));
    expect(carpetaRows.length).toEqual(carpetas.length);
    expect(archivoRows.length).toEqual(archivos.length);
  });

  it('should pass correct data to CarpetaFilaComponent', () => {
    const carpetaRows = fixture.debugElement.queryAll(By.directive(CarpetaFilaComponent));
    carpetaRows.forEach((row, index) => {
      const carpeta = row.componentInstance.carpeta;
      expect(carpeta).toEqual(carpetas[index]);
    });
  });

  it('should pass correct data to ArchivoFilaComponent', () => {
    const archivoRows = fixture.debugElement.queryAll(By.directive(ArchivoFilaComponent));
    archivoRows.forEach((row, index) => {
      const archivo = row.componentInstance.archivo;
      expect(archivo).toEqual(archivos[index]);
    });
  });
});
