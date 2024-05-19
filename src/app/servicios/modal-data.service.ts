import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../modelos/proyectos.model';

@Injectable({
    providedIn: 'root',
})
export class ModalDataService {
    private proyectoSource = new BehaviorSubject<Proyecto>(null);
    proyectoData = this.proyectoSource.asObservable();

    setProyectoData(data: Proyecto): void {
        this.proyectoSource.next(data);
    }

    clearData(): void {
        this.proyectoSource.next(null);
    }
}
