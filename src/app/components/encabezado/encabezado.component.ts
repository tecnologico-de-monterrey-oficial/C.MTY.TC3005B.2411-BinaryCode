import { Component, Input } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { US1 } from '../../../assets/mocks/usuarios';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
@Component({
    selector: 'app-encabezado',
    templateUrl: './encabezado.component.html',
    styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent {
    @Input() usuario: Usuario = US1;
    showPlaceholderUsuario: boolean = false;

    constructor(private modal: NzModalService) {}

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
}
