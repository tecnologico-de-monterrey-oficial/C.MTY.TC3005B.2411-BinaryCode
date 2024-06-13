import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivo } from '../modelos/archivo.model';

@Injectable({
    providedIn: 'root',
})
export class FavoritosService {
    private apiUrl = 'http://localhost:8000/api/archivos/favoritos/';
    private toggleUrl = 'http://localhost:8000/api/archivos/toggle_favorito/';

    constructor(private http: HttpClient) {}

    getFavoritos(): Observable<Archivo[]> {
        const token: string = localStorage.getItem('token');
        const headers: HttpHeaders = new HttpHeaders({
            Authorization: `Token ${token}`,
        });
        return this.http.get<Archivo[]>(this.apiUrl, { headers });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toggleFavorito(idArchivo: string): Observable<any> {
        const token: string = localStorage.getItem('token');
        const headers: HttpHeaders = new HttpHeaders({
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json', // Asegúrate de que los datos se envían como JSON
        });
        return this.http.post(
            this.toggleUrl,
            { id_archivo: idArchivo },
            { headers }
        );
    }
}
