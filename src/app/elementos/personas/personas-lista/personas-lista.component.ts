import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosServices } from '../../../servicios/usuarios.services';

@Component({
    selector: 'app-personas-lista',
    templateUrl: './personas-lista.component.html',
    styleUrl: './personas-lista.component.css',
})
export class PersonasListaComponent {
    usuarios: Usuario[] = [];

    constructor(private usuariosService: UsuariosServices) {
        this.usuarios = usuariosService.getUsuarios();
    }
}
