import { Injectable } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { ProyectoCrearComponent } from '../paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';
import { Proyecto } from '../modelos/proyectos.model';
import { Unidad } from '../modelos/unidad.model';
import { CrearUnidadComponent } from '../paginas/vista-unidades/components/crear-unidad/crear-unidad.component';
import { PermisosComponent } from '../paginas/vista-permisos-carlos/permisos.component';
import { PermisosRango } from './permisos.service';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(
        private modalService: NzModalService,
        private permisosRango: PermisosRango
    ) {}

    openProyectoModal(data?: Proyecto): void {
        const modalRef: NzModalRef = this.modalService.create({
            nzTitle: data ? 'Editar Proyecto' : 'Crear Proyecto',
            nzContent: ProyectoCrearComponent,
            nzFooter: null,
            nzWidth: '80%',
        });

        modalRef.afterClose.subscribe(() => {
            this.permisosRango.clearData();
        });
    }

    openUnidadModal(data?: Unidad): void {
        const modalRef: NzModalRef = this.modalService.create({
            nzTitle: data ? 'Editar Unidad' : 'Crear Unidad',
            nzContent: CrearUnidadComponent,
            nzFooter: null,
            nzWidth: '80%',
        });
        modalRef.afterClose.subscribe(() => {
            this.permisosRango.clearData();
        });
    }

    openPermisosModal(titulo: string): void {
        this.permisosRango.changeTitulo(titulo);
        const modalRef: NzModalRef = this.modalService.create({
            nzTitle: 'Permisos',
            nzContent: PermisosComponent,
            nzFooter: null,
        });

        modalRef.afterClose.subscribe(() => {
            this.permisosRango.clearData();
        });
    }
}
