import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosServices } from '../../../servicios/usuarios.services';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',
})
export class PersonasComponent {
    usuarios: Usuario[] = [];

    constructor(private usuariosService: UsuariosServices) {
        this.usuarios = usuariosService.getUsuarios();
    }
}
