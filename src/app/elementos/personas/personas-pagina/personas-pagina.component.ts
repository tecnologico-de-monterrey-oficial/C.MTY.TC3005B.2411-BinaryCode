import { Component, OnInit } from '@angular/core';
import { getUsuariosAPI } from '../../../servicios/usuarios.services';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-pagina',
    templateUrl: './personas-pagina.component.html',
    styleUrl: './personas-pagina.component.css',
})
export class PersonasPaginaComponent implements OnInit {
    usuarios: Usuario[] = [];

    async ngOnInit(): Promise<void> {
        this.usuarios = await getUsuariosAPI();
    }
}
