import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
    tarjeta_amarillo,
    tarjeta_amarillo_claro,
    tarjeta_amarillo_fuerte,
    tarjeta_azul_claro,
    tarjeta_azul_fuerte,
    tarjeta_azul_medio,
    tarjeta_morado,
    tarjeta_morado_claro,
    tarjeta_morado_fuerte,
    tarjeta_rojo_claro,
    tarjeta_rojo_fuerte,
    tarjeta_rojo_medio,
    tarjeta_rosa,
    tarjeta_rosa_claro,
    tarjeta_rosa_fuerte,
    tarjeta_verde_claro,
    tarjeta_verde_fuerte,
    tarjeta_verde_medio,
} from '../../../../assets/colores';

@Component({
    selector: 'app-editar-perfil',
    templateUrl: './editar-perfil.component.html',
    styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
    @ViewChild('fileInput') fileInput!: ElementRef;

    colores: string[] = [
        tarjeta_azul_fuerte,
        tarjeta_azul_medio,
        tarjeta_azul_claro,
        tarjeta_rojo_fuerte,
        tarjeta_rojo_medio,
        tarjeta_rojo_claro,
        tarjeta_morado_fuerte,
        tarjeta_morado,
        tarjeta_morado_claro,
        tarjeta_verde_fuerte,
        tarjeta_verde_medio,
        tarjeta_verde_claro,
        tarjeta_amarillo_fuerte,
        tarjeta_amarillo,
        tarjeta_amarillo_claro,
        tarjeta_rosa_fuerte,
        tarjeta_rosa,
        tarjeta_rosa_claro,
    ];

    colorSeleccionado!: string;
    imagenSeleccionada: string | ArrayBuffer | null = null;

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = this.colorSeleccionado === color ? '' : color;
    }

    seleccionarImagen(): void {
        this.fileInput.nativeElement.click();
    }

    onFileSelected(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void => {
                this.imagenSeleccionada = e.target?.result || null;
            };
            reader.readAsDataURL(input.files[0]);
            input.value = '';
        }
    }

    quitarImagen(): void {
        this.imagenSeleccionada = null;
    }

    guardarCambios(): void {
        console.log(
            'Cambios guardados con color:',
            this.colorSeleccionado,
            'e imagen:',
            this.imagenSeleccionada
        );
    }
}
