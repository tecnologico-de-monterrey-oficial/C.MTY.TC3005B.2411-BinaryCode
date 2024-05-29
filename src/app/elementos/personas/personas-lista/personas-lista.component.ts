import { Component, OnInit } from '@angular/core';
import { getUsuariosAPI } from '../../../servicios/usuarios.services';
import { Usuario } from '../../../modelos';

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
