import { Component, EventEmitter, Output } from '@angular/core';
import { Proyecto } from '../../../modelos';
import { ProyectosService } from '../../../services/proyectos.service';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    modalVisible: boolean = false;

    abrirModal(): void {
        this.modalVisible = true;
    }

    cerrarModal(): void {
        this.modalVisible = false;
    }

    async handleCrearProyecto(
        proyectoACrear: Proyecto,
        finishLoading: () => void
    ): Promise<void> {
        const proyecto: Proyecto =
            await this.proyectoServicio.postProyecto(proyectoACrear);
        if (proyecto !== null) {
            this.crearProyectoImportado.emit(proyecto);
            this.cerrarModal();
        }
        finishLoading();
    }

    constructor(private proyectoServicio: ProyectosService) {}
}
