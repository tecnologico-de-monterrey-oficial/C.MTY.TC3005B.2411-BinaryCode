// archivo-modal.service.ts
import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';

@Injectable({
    providedIn: 'root',
})
export class ArchivoModalService {
    private archivo: Archivo;

    setArchivo(archivo: Archivo): void {
        this.archivo = archivo;
    }

    getArchivo(): Archivo {
        return this.archivo;
    }
}
