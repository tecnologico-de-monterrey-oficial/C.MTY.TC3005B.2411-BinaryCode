import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CrearCarpetaComponent } from '../../components/crear-carpeta/crear-carpeta.component';
import { Unidad } from '../../../../modelos/unidad.model';
import { CarpetaCompartidaService } from '../../../../servicios/carpeta-compartida.service';

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrls: ['./carpeta-fila.component.css'],
})
export class CarpetaFilaComponent {
    @Input() carpeta: Unidad;

    constructor(
        private router: Router,
        private modal: NzModalService,
        private carpetaService: CarpetaCompartidaService
    ) {}

    onFolderClick(): void {
        console.log('Carpeta clickeada', this.carpeta.id);

        // Obtener el URL actual
        const url: string = this.router.url;

        // Dividir el URL en segmentos para reemplazar el último
        const segments: string[] = url.split('/');
        segments[segments.length - 1] = String(this.carpeta.id);

        // Navegar al nuevo URL
        this.router.navigateByUrl(segments.join('/'));
    }

    onMenuClick(event: Event): void {
        event.stopPropagation();
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
