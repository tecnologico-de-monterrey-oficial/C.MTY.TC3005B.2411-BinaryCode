import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { US1, US2, US3 } from '../../../../assets/mocks/usuarios';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-permisos-lideres',
    templateUrl: './permisos-lideres.component.html',
    styleUrl: './permisos-lideres.component.css',
})
export class PermisosLideresComponent {
    lideres: Usuario[] = [US1, US2, US3];
    buscadorVisible: boolean = false;

    constructor(private message: NzMessageService) {}

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.lideres = this.lideres.filter(líder => líder.id !== idEliminado);
    }

    addEditores(personas: Usuario[]): void {
        //Hacer llamada API
        const successAPI: boolean = true;

        if (successAPI) {
            personas.forEach(persona => this.lideres.push(persona));
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

    abrirBuscador(): void {
        this.buscadorVisible = true;
    }
}
