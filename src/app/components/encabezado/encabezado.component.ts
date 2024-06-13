import { Component, Input } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { US1 } from '../../../assets/mocks/usuarios';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { ArchivosService } from '../../servicios/archivo.services';
import { Archivo } from '../../modelos/archivo.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-encabezado',
    templateUrl: './encabezado.component.html',
    styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent {
    @Input() usuario: Usuario = US1;
    showPlaceholderUsuario: boolean = false;
    searchResults: Archivo[] = [];

    constructor(
        private modal: NzModalService,
        private archivosService: ArchivosService,
        private router: Router
    ) {}

    handleImageError(): void {
        this.showPlaceholderUsuario = true;
    }

    abrirModalEditarPerfil(): void {
        this.modal.create({
            nzTitle: 'Editar Perfil',
            nzContent: EditarPerfilComponent,
            nzFooter: null,
        });
    }

    abrirModalBusquedaAvanzada(): void {
        this.modal.create({
            nzTitle: 'Búsqueda Avanzada',
            nzContent: BusquedaAvanzadaComponent,
            nzFooter: null,
        });
    }

    buscarArchivos(term: string): void {
        this.router.navigate(['/contenidos'], {
            queryParams: { search: term },
        });
    }
}
