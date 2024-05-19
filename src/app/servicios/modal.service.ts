import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalDataService } from './modal-data.service';
import { ProyectoCrearComponent } from '../paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';
import { Proyecto } from '../modelos/proyectos.model';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(
        private modalService: NzModalService,
        private modalDataService: ModalDataService
    ) {}

    openProyectoModal(data?: Proyecto): void {
        this.modalDataService.setProyectoData(data);
        const modalRef: NzModalRef = this.modalService.create({
            nzTitle: data ? 'Editar Proyecto' : 'Crear Proyecto',
            nzContent: ProyectoCrearComponent,
            nzFooter: null,
            nzWidth: '80%',
        });

        modalRef.afterClose.subscribe(() => {
            this.modalDataService.clearData();
        });
    }
}
