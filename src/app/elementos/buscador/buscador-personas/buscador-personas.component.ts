import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosServices } from '../../../servicios/usuarios.services';
import { personaBuscador } from '../buscador-mini-personas/buscador-mini-personas.component';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-buscador-personas',
    templateUrl: './buscador-personas.component.html',
    styleUrl: './buscador-personas.component.css',
})
export class BuscadorPersonasComponent {
    @Output() agregarCoordinadores = new EventEmitter<Usuario[]>();
    @Output() cancelar = new EventEmitter<void>();

    seleccionados: personaBuscador[];

    constructor(usuariosService: UsuariosServices) {
        this.seleccionados = usuariosService
            .getUsuarios()
            .map(usuario => ({ ...usuario, seleccionado: false }));
    }

    handleCancel(): void {
        this.cancelar.emit();
    }

    handleSeleccionar(persona: personaBuscador): void {
        this.seleccionados = this.seleccionados.map(p =>
            p === persona ? { ...p, seleccionado: !p.seleccionado } : p
        );
    }

    handleAgregar(): void {
        const finales: Usuario[] = this.seleccionados
            .filter(p => p.seleccionado)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                imagenUrl: p.imagenUrl,
                fecha: p.fecha,
            }));
        this.agregarCoordinadores.emit(finales);
    }
}
