import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Archivo, Etiqueta } from '../../../modelos';
import { US1 } from '../../../../assets/mocks/usuarios';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';
import { EtiquetasService } from '../../../servicios/etiquetas.service';
import {
    palabrasTotalesArchivoDescripcion,
    palabrasTotalesNombreArchivo,
} from '../../../constantes';

type sendCrearArchivo = {
    archivo: Archivo;
    terminar: () => void;
};

@Component({
    selector: 'app-archivos-crear-modal',
    templateUrl: './archivos-crear-modal.component.html',
    styleUrl: './archivos-crear-modal.component.css',
})
export class ArchivosCrearModalComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();
    @Output() crearArchivoImportada = new EventEmitter<sendCrearArchivo>();
    @Output() actualizarArchivoImportada = new EventEmitter<sendCrearArchivo>();

    @Input() archivoOriginal: Archivo;
    @Input() unidadId: number;

    validateForm: FormGroup<{
        terminoBusquedaEtiqueta: FormControl<string>;
        nombreArchivo: FormControl<string>;
        descripcion: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    fuse: Fuse<Etiqueta>;

    etiquetasActuales: Etiqueta[];
    etiquetasTotales: Etiqueta[];
    etiquetasFiltradas: Etiqueta[];
    menuEtiquetasVisible: boolean = false;
    imagenControl: string = '';

    archivoEnProceso: Archivo;
    isLoading: boolean;

    parametrosBusqueda: IFuseOptions<Etiqueta> = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['nombre'],
    };

    palabrasTotalesNombre: number = palabrasTotalesNombreArchivo;
    palabrasTotalesDescripcion: number = palabrasTotalesArchivoDescripcion;

    ngOnInit(): void {
        this.etiquetasActuales = this.archivoOriginal?.etiquetas || [];

        this.archivoEnProceso = this.archivoOriginal || {
            nombre: '',
            favorito: false,
            propietario: US1,
            etiquetas: this.etiquetasActuales,
        };

        this.validateForm = this.fb.group({
            terminoBusquedaEtiqueta: [''],
            nombreArchivo: [
                this.archivoEnProceso.nombre,
                [
                    Validators.required,
                    Validators.maxLength(this.palabrasTotalesNombre),
                ],
            ],
            descripcion: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(this.palabrasTotalesDescripcion),
                ],
            ],
            imagen: ['', [Validators.required]],
        });

        // Debido a que se definen valores para la búsqueda, no hay necesidad de esperar la llamada
        this.definirValoresEtiquetas();
    }

    async definirValoresEtiquetas(): Promise<void> {
        const etiquetas: Etiqueta[] =
            await this.etiquetasService.getEtiquetas();

        this.etiquetasTotales = etiquetas
            .filter(
                etiqueta =>
                    !this.etiquetasActuales?.some(
                        actual => actual.id === etiqueta.id
                    )
            )
            .map(etiqueta => ({ ...etiqueta, seleccionada: false }));

        this.etiquetasFiltradas = this.etiquetasTotales;
        this.fuse = new Fuse(this.etiquetasTotales, this.parametrosBusqueda);
    }

    cancelarModal(): void {
        this.cancelModal.emit();
    }

    seleccionarArchivo(event: Event): void {
        event;
    }

    handleBusquedaEtiqueta(): void {
        this.menuEtiquetasVisible = true;
        if (!this.validateForm.value.terminoBusquedaEtiqueta) {
            this.etiquetasFiltradas = this.etiquetasTotales;
        } else {
            const result: FuseResult<Etiqueta>[] = this.fuse.search(
                this.validateForm.value.terminoBusquedaEtiqueta
            );
            this.etiquetasFiltradas = result.map(resultado => resultado.item);
            if (this.etiquetasFiltradas.length > 10) {
                this.etiquetasFiltradas = this.etiquetasFiltradas.slice(0, 10);
            }
        }
    }

    handleMenuBusquedaVisible(valor: boolean): void {
        this.menuEtiquetasVisible = valor;
    }

    agregarEtiqueta(etiqueta: Etiqueta): void {
        this.menuEtiquetasVisible = false;
        this.etiquetasActuales.push(etiqueta);
        this.etiquetasTotales = this.etiquetasTotales.filter(
            e => e.id !== etiqueta.id
        );
        this.fuse.setCollection(this.etiquetasTotales);
    }

    quitarEtiqueta(etiqueta: Etiqueta): void {
        this.etiquetasActuales = this.etiquetasActuales.filter(
            e => e.id !== etiqueta.id
        );
        this.etiquetasTotales.push(etiqueta);
        this.fuse.setCollection(this.etiquetasTotales);
    }

    crearArchivo(): void {}

    constructor(
        private fb: FormBuilder,
        private etiquetasService: EtiquetasService
    ) {}
}
