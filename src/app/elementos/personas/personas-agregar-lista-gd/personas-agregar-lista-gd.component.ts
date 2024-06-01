import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { getEditores } from '../../../servicios/unidad.services';
import { Unidad, Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-agregar-lista-gd',
    templateUrl: './personas-agregar-lista-gd.component.html',
    styleUrl: './personas-agregar-lista-gd.component.css',
})
export class PersonasAgregarListaGdComponent implements OnInit {
    @Input() unidad: Unidad;

    buscadorVisible: boolean = false;
    editores: Usuario[];

    constructor(private message: NzMessageService) {}

    ngOnInit(): void {
        if (this.unidad) {
            this.editores = getEditores(this.unidad.id);
        }
    }

    onRemoveItemClick(idEliminado: number): void {
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
