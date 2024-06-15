import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { UsuariosServices } from '../../servicios/usuarios.services';
import { PermisosRango } from '../../servicios/permisos.service';

@Component({
    selector: 'app-permisos',
    templateUrl: './permisos.component.html',
    styleUrls: ['./permisos.component.css'],
})
export class PermisosComponent implements OnInit {
    titulo: string = 'Líderes';
    usuarios: Usuario[] = [];

    constructor(
        private usuariosService: UsuariosServices,
        private permisosRango: PermisosRango
    ) {}

    ngOnInit(): void {
        this.usuarios = this.usuariosService.getUsuarios();
        this.permisosRango.currentTitulo.subscribe(
            titulo => (this.titulo = titulo)
        );
    }
}
