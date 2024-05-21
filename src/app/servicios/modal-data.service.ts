import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../modelos/proyectos.model';
import { Unidad } from '../modelos/unidad.model';

@Injectable({
    providedIn: 'root',
})
export class ModalDataService {
    private proyectoSource = new BehaviorSubject<Proyecto>(null);
    proyectoData = this.proyectoSource.asObservable();
    private unidadSource = new BehaviorSubject<Unidad>(null);
    unidadData = this.unidadSource.asObservable();

    setProyectoData(data: Proyecto): void {
        this.proyectoSource.next(data);
    }
    setUnidadData(data: Unidad): void {
        this.unidadSource.next(data);
    }

    clearData(): void {
        this.proyectoSource.next(null);
    }
}
