import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalDataService {
  private proyectoSource = new BehaviorSubject<any>(null);
  proyectoData = this.proyectoSource.asObservable();

  constructor() {}

  setProyectoData(data: any) {
    this.proyectoSource.next(data);
  }

  clearData() {
    this.proyectoSource.next(null);
  }
}
