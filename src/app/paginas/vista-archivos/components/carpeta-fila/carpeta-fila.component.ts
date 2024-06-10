import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CrearCarpetaComponent } from '../../components/crear-carpeta/crear-carpeta.component';
import { Unidad } from '../../../../modelos/unidad.model';
import { CarpetaCompartidaService } from '../../../../servicios/carpeta-compartida.service'; // Asegúrate de poner la ruta correcta

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrls: ['./carpeta-fila.component.css'],
})
export class CarpetaFilaComponent {
    @Input() carpeta: Unidad;

    constructor(
        private modal: NzModalService,
        private carpetaService: CarpetaCompartidaService
    ) {}

    onFolderClick(): void {
        console.log('Carpeta clickeada');
    }

    openEditModal(): void {
        this.carpetaService.cambiarCarpeta(this.carpeta);
        this.carpetaService.setModoEdicion(true);
        this.modal.create({
            nzTitle: 'Editar Carpeta',
            nzContent: CrearCarpetaComponent,
            nzFooter: null,
        });
    }
}
