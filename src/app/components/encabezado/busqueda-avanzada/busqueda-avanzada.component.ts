import { Component } from '@angular/core';
import { ProyectosService } from '../../../servicios/proyecto.services';
// import { Proyecto } from '../../../servicios/proyecto.services';
// import { UnidadService } from '../../../servicios/unidad.services';
// import { ArchivoServices } from '../../../modelos/archivo.model';

interface Proyecto {
    id: number;
    nombre: string;
    color: string;
}

interface Etiqueta {
    id: number;
    nombre: string;
    color: string;
}

interface Persona {
    id: number;
    nombre: string;
}

@Component({
    selector: 'app-busqueda-avanzada',
    templateUrl: './busqueda-avanzada.component.html',
    styleUrls: ['./busqueda-avanzada.component.css'],
})
export class BusquedaAvanzadaComponent {
    constructor(private proyectoService: ProyectosService) {}
    // constructor (private unidadService: UnidadService) {}
    proyectos: Proyecto[] = this.proyectoService.getCache();

    etiquetas: Etiqueta[] = [
        // { id: 1, nombre: 'Etiqueta A', color: 'yellow' },
        // { id: 2, nombre: 'Etiqueta B', color: 'purple' },
        // { id: 3, nombre: 'Etiqueta C', color: 'orange' },
    ];
    personas: Persona[] = [
        { id: 1, nombre: 'Persona A' },
        { id: 2, nombre: 'Persona B' },
        { id: 3, nombre: 'Persona C' },
    ];
    selectedProyectos: Proyecto[] = [];
    selectedEtiquetas: Etiqueta[] = [];
    selectedPersonas: Persona[] = [];
    fechaInicio: Date | null = null;
    fechaFin: Date | null = null;

    onProyectoSelect(value: Proyecto[]): void {
        this.selectedProyectos = value;
    }

    onEtiquetaSelect(value: Etiqueta[]): void {
        this.selectedEtiquetas = value;
    }

    onPersonaSelect(value: Persona[]): void {
        this.selectedPersonas = value;
    }
}
