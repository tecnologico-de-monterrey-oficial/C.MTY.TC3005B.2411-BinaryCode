import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Archivo, Etiqueta, Proyecto, Usuario } from '../../../modelos';

@Component({
    selector: 'app-estructura-encabezado-busqueda-opciones',
    templateUrl: './estructura-encabezado-busqueda-opciones.component.html',
    styleUrl: './estructura-encabezado-busqueda-opciones.component.css',
})
export class EstructuraEncabezadoBusquedaOpcionesComponent implements OnInit {
    @Input() archivosAPI: Archivo[];
    @Input() cambioArchivosTotales: EventEmitter<Archivo[]>;

    validateForm: FormGroup<{
        tipo: FormControl<string>;
        propietario: FormControl<Usuario>;
        fecha: FormControl<string>;
        proyecto: FormControl<Proyecto>;
        etiquetas: FormControl<Etiqueta[]>;
    }>;

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            tipo: [''],
            propietario: [null],
            fecha: [''],
            proyecto: [null],
            etiquetas: [[] as Etiqueta[]],
        });
    }

    handleAplicarFiltros(): void {
        // const filtros: {
        //     tipo: string;
        //     propietario: Usuario;
        //     fecha: string;
        //     proyecto: Proyecto;
        //     etiquetas: Etiqueta[];
        // } = this.validateForm.value;
        // const archivosFiltrados: Archivo[] = this.archivosAPI.filter(
        //     archivo => {
        //         let resultado: boolean = true;
        //         if (filtros.tipo) {
        //             resultado = resultado && archivo.tipo === filtros.tipo;
        //         }
        //         if (filtros.propietario) {
        //             resultado =
        //                 resultado &&
        //                 archivo.propietario.id === filtros.propietario.id;
        //         }
        //         if (filtros.fecha) {
        //             resultado = resultado && archivo.fecha === filtros.fecha;
        //         }
        //         if (filtros.proyecto) {
        //             resultado =
        //                 resultado &&
        //                 archivo.proyecto.id === filtros.proyecto.id;
        //         }
        //         if (filtros.etiquetas.length > 0) {
        //             resultado =
        //                 resultado &&
        //                 filtros.etiquetas.every(etiqueta =>
        //                     archivo.etiquetas.some(
        //                         archivoEtiqueta =>
        //                             archivoEtiqueta.id === etiqueta.id
        //                     )
        //                 );
        //         }
        //         return resultado;
        //     }
        // );
        // this.cambioArchivosTotales.emit(archivosFiltrados);
    }

    // filtro(archivoAProbar: Archivo): boolean {
    //     if (this.validateForm.value.tipo) {
    //         if (archivoAProbar.tipo === this.validateForm.value.tipo) {
    //             return true;
    //         }
    //     }
    //     if (this.validateForm.value.propietario) {
    //         if (
    //             archivoAProbar.propietario.id ===
    //             this.validateForm.value.propietario.id
    //         ) {
    //             return true;
    //         }
    //     }
    //     if (this.validateForm.value.fecha) {
    //         if (archivoAProbar.fecha === this.validateForm.value.fecha) {
    //             return true;
    //         }
    //     }
    //     if (this.validateForm.value.proyecto) {
    //         if (
    //             archivoAProbar.proyecto.id ===
    //             this.validateForm.value.proyecto.id
    //         ) {
    //             return true;
    //         }
    //     }
    //     if (this.validateForm.value.etiquetas.length > 0) {
    //         if (
    //             this.validateForm.value.etiquetas.every(etiqueta =>
    //                 archivoAProbar.etiquetas.some(
    //                     archivoEtiqueta => archivoEtiqueta.id === etiqueta.id
    //                 )
    //             )
    //         ) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    constructor(private fb: FormBuilder) {}
}
