import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unidad } from '../modelos/unidad.model';

@Injectable({
    providedIn: 'root',
})
export class CarpetaCompartidaService {
    private carpetaSource = new BehaviorSubject<Unidad | null>(null);
    private modoEdicionSource = new BehaviorSubject<boolean>(false);

    carpetaActual$ = this.carpetaSource.asObservable();
    modoEdicionActual$ = this.modoEdicionSource.asObservable();

    cambiarCarpeta(carpeta: Unidad | null): void {
        this.carpetaSource.next(carpeta);
    }

    setModoEdicion(modo: boolean): void {
        this.modoEdicionSource.next(modo);
    }

    reset(): void {
        this.carpetaSource.next(null);
        this.modoEdicionSource.next(false);
    }
}
