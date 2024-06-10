import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
    selector: 'app-personas-pagina',
    templateUrl: './personas-pagina.component.html',
    styleUrl: './personas-pagina.component.css',
})
export class PersonasPaginaComponent implements OnInit {
    usuarios: Usuario[] = [];

    async ngOnInit(): Promise<void> {
        this.usuarios = await this.usuariosService.getUsuariosAPI();
    }

    constructor(private usuariosService: UsuariosService) {}
}
