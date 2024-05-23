import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';
import { Usuario } from '../../../modelos/usuario.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-permisos-editores',
    templateUrl: './permisos-editores.component.html',
    styleUrl: './permisos-editores.component.css',
})
export class PermisosEditoresComponent implements OnInit {
    @Input() unidad: Unidad;

    buscadorVisible: boolean = false;
    editores: Usuario[];

    constructor(
        private unidadesService: UnidadesService,
        private message: NzMessageService
    ) {}

    ngOnInit(): void {
        if (this.unidad) {
            this.editores = this.unidadesService.getEditores(this.unidad.id);
        }
    }

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.editores = this.editores.filter(
            editor => editor.id !== idEliminado
        );
    }

    addEditores(personas: Usuario[]): void {
        //Hacer llamada API
        const successAPI: boolean = true;

        if (successAPI) {
            personas.forEach(persona => this.editores.push(persona));
            this.cancelarBuscador();
            this.message.success('Los editores se agregaron exitosamente', {
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
