import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { US1, US2, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Unidad } from '../modelos/unidad.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    private baseUrl = 'http://127.0.0.1:8000/api/apartados';

    coordinadores: Usuario[] = [US4, US5, US6];
    editores: Usuario[] = [US1, US2, US6];

    constructor(private http: HttpClient) {}

    getUnidadesPorProyecto(proyectoId: string): Observable<Unidad[]> {
        return this.http.get<Unidad[]>(
            `${this.baseUrl}/?Id_proyecto=${proyectoId}`
        );
    }

    getCoordinadores(idUnidad: string): Usuario[] {
        idUnidad;
        return this.coordinadores;
    }

    getEditores(idUnidad: string): Usuario[] {
        idUnidad;
        return this.editores;
    }
}
