import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivo } from '../modelos/archivo.model';

@Injectable({
    providedIn: 'root',
})
export class RecientesService {
    private apiUrl = 'http://localhost:8000/api/archivos/recientes/';

    constructor(private http: HttpClient) {}

    getLatestFiles(): Observable<Archivo[]> {
        return this.http.get<Archivo[]>(this.apiUrl);
    }
}
