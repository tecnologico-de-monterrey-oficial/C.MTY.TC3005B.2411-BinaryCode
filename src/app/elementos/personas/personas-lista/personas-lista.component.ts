import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { getUsuariosAPI } from '../../../servicios/usuarios.services';

@Component({
    selector: 'app-personas-lista',
    templateUrl: './personas-lista.component.html',
    styleUrl: './personas-lista.component.css',
})
export class PersonasListaComponent implements OnInit {
    usuarios: Usuario[] = [];

    async ngOnInit(): Promise<void> {
        this.usuarios = await getUsuariosAPI();
    }
}
