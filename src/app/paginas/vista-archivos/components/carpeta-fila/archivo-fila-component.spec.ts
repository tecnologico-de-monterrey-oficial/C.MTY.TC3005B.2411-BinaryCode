import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CarpetaFilaComponent } from './carpeta-fila.component';
import { Carpeta } from '../../../../modelos/carpeta.model';

describe('CarpetaFilaComponent', () => {
  let component: CarpetaFilaComponent;
  let fixture: ComponentFixture<CarpetaFilaComponent>;
  let carpeta: Carpeta;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetaFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetaFilaComponent);
    component = fixture.componentInstance;
    carpeta = {
        id: '1',
      nombre: 'Mi Carpeta',
      color: 'blue',
      fecha: '2024-04-13'
    };
    component.carpeta = carpeta;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct folder name', () => {
    const nombreElement = fixture.nativeElement.querySelector('.texto');
    expect(nombreElement.textContent).toContain(carpeta.nombre);
  });

  it('should call onFolderClick method when folder card is clicked', () => {
    spyOn(component, 'onFolderClick');
    const folderCard = fixture.nativeElement.querySelector('.file-card');
    folderCard.click();
    expect(component.onFolderClick).toHaveBeenCalled();
  });
});
