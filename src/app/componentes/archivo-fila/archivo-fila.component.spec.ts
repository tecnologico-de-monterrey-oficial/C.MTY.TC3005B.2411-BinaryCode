import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoFilaComponent } from './archivo-fila.component';

describe('ArchivoComponent', () => {
  let component: ArchivoFilaComponent;
  let fixture: ComponentFixture<ArchivoFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivoFilaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivoFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
