import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Usuario } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    private baseUrl = 'http://127.0.0.1:8000/api/apartados/';
    // unidades: Unidad[] = [UN1, UN2, UN3, UN4, UN5, UN6];
    coordinadores: Usuario[] = [US4, US5, US6];
    editores: Usuario[] = [US1, US2, US3, US4, US5, US6];
    Unidades: Unidad[] = [];

    constructor(private http: HttpClient) {}
    // getCache(): Unidad[] {
    //     return this.Unidades[];
    // }

    getUnidadesPorProyecto(proyectoId: number): Observable<Unidad[]> {
        return this.http.get<Unidad[]>(
            `${this.baseUrl}?id_proyecto__id=${proyectoId}`
        );
    }

    getCoordinadores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.coordinadores;
    }

    getEditores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.editores;
    }

    eliminarUnidad(unidadId: number): Observable<Unidad> {
        const url: string = `${this.baseUrl}${unidadId}/`;
        return this.http.delete<Unidad>(url);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    crearCarpeta(carpetaData: any): Observable<any> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.post<any>(this.baseUrl, carpetaData);
    }
}
