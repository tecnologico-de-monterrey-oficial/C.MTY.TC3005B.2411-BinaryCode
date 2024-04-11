import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoArchivosComponent } from './contenido-archivos.component';

describe('ArchivosComponent', () => {
  let component: ContenidoArchivosComponent;
  let fixture: ComponentFixture<ContenidoArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenidoArchivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
