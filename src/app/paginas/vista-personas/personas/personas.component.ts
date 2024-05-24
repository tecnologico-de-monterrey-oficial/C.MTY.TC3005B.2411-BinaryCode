import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosServices } from '../../../servicios/usuarios.services';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit {
    usuarios: Usuario[] = [];

    constructor(private usuariosService: UsuariosServices) {}
    async ngOnInit(): Promise<void> {
        this.usuarios = await this.usuariosService.getUsuarios();
    }
}
