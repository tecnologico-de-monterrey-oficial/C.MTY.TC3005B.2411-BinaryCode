import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosServices } from '../../../servicios/usuarios.services';
import { personaBuscador } from '../buscador-mini-personas/buscador-mini-personas.component';
import { Usuario } from '../../../modelos/usuario.model';
import { FuseResult } from 'fuse.js';
import Fuse from 'fuse.js';

@Component({
    selector: 'app-buscador-personas',
    templateUrl: './buscador-personas.component.html',
    styleUrl: './buscador-personas.component.css',
})
export class BuscadorPersonasComponent {
    @Output() agregarCoordinadores = new EventEmitter<Usuario[]>();
    @Output() cancelar = new EventEmitter<void>();

    fuse: Fuse<personaBuscador>;
    usuariosTotales: personaBuscador[];
    usuariosFiltrados: personaBuscador[];

    parametrosBusqueda = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['nombre'],
    };

    constructor(usuariosService: UsuariosServices) {
        this.usuariosTotales = usuariosService
            .getUsuarios()
            .map(usuario => ({ ...usuario, seleccionado: false }));
        this.sort();

        this.usuariosFiltrados = this.usuariosTotales;
        this.fuse = new Fuse(this.usuariosTotales, this.parametrosBusqueda);
    }

    sort(): void {
        this.usuariosTotales.sort((a, b) => {
            if (a.seleccionado === b.seleccionado) {
                return a.nombre.localeCompare(b.nombre);
            }
            return b.seleccionado ? 1 : -1;
        });
    }

    handleCancel(): void {
        this.cancelar.emit();
    }

    handleSeleccionar(persona: personaBuscador): void {
        this.usuariosTotales = this.usuariosTotales.map(p =>
            p === persona ? { ...p, seleccionado: !p.seleccionado } : p
        );
        this.sort();
    }

    handleAgregar(): void {
        const finales: Usuario[] = this.usuariosTotales
            .filter(p => p.seleccionado)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                imagenUrl: p.imagenUrl,
                fecha: p.fecha,
            }));
        this.agregarCoordinadores.emit(finales);
    }

    handleSearch(termino: string): void {
        if (!termino) {
            this.usuariosFiltrados = this.usuariosTotales;
        } else {
            const result: FuseResult<personaBuscador>[] =
                this.fuse.search(termino);
            this.usuariosFiltrados = result.map(resultado => resultado.item);
        }
    }
}
