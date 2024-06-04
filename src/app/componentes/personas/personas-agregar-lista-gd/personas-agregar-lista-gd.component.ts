import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Unidad, Usuario } from '../../../modelos';
import { UnidadesService } from '../../../servicios/unidades.service';
import { permisoType } from '../../permisos/permisos-constantes';

@Component({
    selector: 'app-personas-agregar-lista-gd',
    templateUrl: './personas-agregar-lista-gd.component.html',
    styleUrl: './personas-agregar-lista-gd.component.css',
})
export class PersonasAgregarListaGdComponent implements OnInit {
    @Input() unidad: Unidad;

    buscadorVisible: boolean = false;
    usuariosActuales: Usuario[];

    permiso: permisoType = permisoType.editor;

    constructor(
        private message: NzMessageService,
        private unidadesService: UnidadesService
    ) {}

    ngOnInit(): void {
        if (this.unidad) {
            this.usuariosActuales = this.unidadesService.getEditores(
                this.unidad.id
            );
        }
    }

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.usuariosActuales = this.usuariosActuales.filter(
            editor => editor.id !== idEliminado
        );
    }

    addEditores(personas: Usuario[]): void {
        //Hacer llamada API
        const successAPI: boolean = true;

        if (successAPI) {
            personas.forEach(persona => this.usuariosActuales.push(persona));
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
