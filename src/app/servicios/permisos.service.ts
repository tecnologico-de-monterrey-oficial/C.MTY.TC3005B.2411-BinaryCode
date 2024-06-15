import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PermisosRango {
    private tituloSource = new BehaviorSubject<string>('Líderes');
    currentTitulo = this.tituloSource.asObservable();

    changeTitulo(titulo: string): void {
        this.tituloSource.next(titulo);
    }

    clearData(): void {
        this.tituloSource.next('Líderes');
    }
}
