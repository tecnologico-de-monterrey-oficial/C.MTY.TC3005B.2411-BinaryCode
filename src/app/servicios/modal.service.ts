import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProyectoCrearComponent } from '../paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(private modalService: NzModalService) {}

    openCrearProyectoModal(): void {
        this.modalService.create({
            nzTitle: 'Crear Proyecto',
            nzContent: ProyectoCrearComponent,
            nzFooter: null, // No footer, customize as needed
            nzWidth: '80%', // Adjust width as needed
        });
    }
}
