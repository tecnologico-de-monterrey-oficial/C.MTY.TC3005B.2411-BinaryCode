import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-permisos-coordinadores',
    templateUrl: './permisos-coordinadores.component.html',
    styleUrl: './permisos-coordinadores.component.css',
})
export class PermisosCoordinadoresComponent {
    coordinadores: Usuario[] = [];
    buscadorVisible: boolean = false;

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }

    addCoordinadores(personas: Usuario[]): void {
        //Hacer llamada API
        const successAPI: boolean = true;

        if (successAPI) {
            personas.forEach(persona => {
                if (
                    !this.coordinadores.some(
                        coordinador => coordinador.id === persona.id
                    )
                ) {
                    this.coordinadores.push(persona);
                }
            });
            this.cancelarBuscador();
            this.message.success('Los líderes se agregaron exitosamente', {
                nzDuration: 10000,
            });
        } else {
            this.message.error('Hubo un error al agregar los datos', {
                nzDuration: 10000,
            });
        }
    }

    cancelarBuscador(): void {
        this.buscadorVisible = false;
    }

    constructor(private message: NzMessageService) {}
}
