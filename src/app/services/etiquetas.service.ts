import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Etiqueta } from '../modelos';
import { E1, E2, E3, E4, E5, E6, E7 } from '../../assets/mocks/etiquetas';
import { BASE_URL } from '../constantes';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class EtiquetasService {
    private baseUrl: string = BASE_URL + 'api/etiquetas/'; // Base URL for API
    private token: string = this.authService.getToken();
    private etiquetasCache: { [id: number]: Etiqueta };

    private customHeader: HeadersInit = this.token
        ? {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token,
          }
        : {
              'Content-Type': 'application/json',
          };

    getEtiquetas: { (): Promise<Etiqueta[]> } = async () => {
        return [E1, E2, E3, E4, E5, E6, E7];
        if (this.etiquetasCache) {
            return Object.values(this.etiquetasCache);
        }
        try {
            const response: Response = await fetch(this.baseUrl, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const etiquetas: Etiqueta[] = await response.json();
            this.etiquetasCache = {};
            for (const etiqueta of etiquetas) {
                this.etiquetasCache[etiqueta.id] = etiqueta;
            }
            return etiquetas;
        } catch (error) {
            console.error('Error obteniendo las etiquetas', error);
            this.message.error(
                'Hubo un error al obtener las etiquetas, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
    };

    postEtiqueta: { (etiquetaACrear: Etiqueta): Promise<Etiqueta> } =
        async etiquetaACrear => {
            try {
                const response: Response = await fetch(this.baseUrl, {
                    method: 'POST',
                    headers: this.customHeader,
                    body: JSON.stringify(etiquetaACrear),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const respuestaAPI: Etiqueta = await response.json();
                this.etiquetasCache[respuestaAPI.id] = respuestaAPI;
                return respuestaAPI;
            } catch (error) {
                console.log('Error creando la etiqueta', error);
                this.message.error('Hubo un error al crear la etiqueta', {
                    nzDuration: 10000,
                });
            }
        };

    constructor(
        private message: NzMessageService,
        private authService: AuthService
    ) {}
}
