import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ArchivoCompartidoService {
    private archivoSubject = new BehaviorSubject<Archivo | null>(null);
    private isEditingSubject = new BehaviorSubject<boolean>(false);

    setArchivo(archivo: Archivo | null, isEditing: boolean): void {
        this.archivoSubject.next(archivo);
        this.isEditingSubject.next(isEditing);
    }

    getArchivo(): Observable<Archivo | null> {
        return this.archivoSubject.asObservable();
    }

    isEditing(): Observable<boolean> {
        return this.isEditingSubject.asObservable();
    }

    reset(): void {
        this.archivoSubject.next(null);
        this.isEditingSubject.next(false);
    }
}
