import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { Usuario } from '../../../../modelos/usuario.model';

@Component({
    selector: 'app-editores-permisos',
    templateUrl: './editores-permisos.component.html',
    styleUrl: './editores-permisos.component.css',
})
export class EditoresPermisosComponent implements OnInit {
    @Input() unidad: Unidad;
    editores: Usuario[];

    constructor(private unidadesService: UnidadesService) {}

    ngOnInit(): void {
        if (this.unidad) {
            this.editores = this.unidadesService.getEditores(this.unidad.id);
        }
    }

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.editores = this.editores.filter(
            editor => editor.id !== idEliminado
        );
    }
}
