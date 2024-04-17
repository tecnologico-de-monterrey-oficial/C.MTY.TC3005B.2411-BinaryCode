import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoComponent } from './encabezado.component';

describe('HeaderComponent', () => {
  let component: EncabezadoComponent;
  let fixture: ComponentFixture<EncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncabezadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
