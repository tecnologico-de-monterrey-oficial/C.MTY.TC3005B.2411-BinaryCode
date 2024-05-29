import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { US1, US2, US3 } from '../../../../assets/mocks/usuarios';
import {
    buscadorPersonasInput,
    coordinadorMensaje,
    editorMensaje,
    liderMensaje,
    permisoType,
} from '../permisos-constantes';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-permisos-buscador-mini',
    templateUrl: './permisos-buscador-mini.component.html',
    styleUrl: './permisos-buscador-mini.component.css',
})
export class PermisosBuscadorMiniComponent implements OnInit {
    @Input() usuariosActuales: Usuario[] = [US1, US2, US3];
    @Input() tipoUsuario: permisoType;

    buscadorVisible: boolean = false;
    mensajes: buscadorPersonasInput;

    constructor(private message: NzMessageService) {}

    ngOnInit(): void {
        if (this.tipoUsuario === permisoType.editor) {
            this.mensajes = editorMensaje;
        } else if (this.tipoUsuario === permisoType.lider) {
            this.mensajes = liderMensaje;
        } else if (this.tipoUsuario === permisoType.coordinador) {
            this.mensajes = coordinadorMensaje;
        }
    }

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.usuariosActuales = this.usuariosActuales.filter(
            usuario => usuario.id !== idEliminado
        );
    }

    addUsuarios(personas: Usuario[]): void {
        //Hacer llamada API
        const successAPI: boolean = true;

        if (successAPI) {
            personas.forEach(persona => this.usuariosActuales.push(persona));
            this.cancelarBuscador();
            this.message.success(this.mensajes.success, {
                nzDuration: 10000,
            });
        } else {
            this.message.error(this.mensajes.error, {
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
