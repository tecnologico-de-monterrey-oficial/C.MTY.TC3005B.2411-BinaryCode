import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../modelos';
import { FormControl, FormGroup } from '@angular/forms';
import { paletaColores } from '../../../../assets/colores';

@Component({
    selector: 'app-estructura-encabezado-modificar-perfil-modal',
    templateUrl:
        './estructura-encabezado-modificar-perfil-modal.component.html',
    styleUrl: './estructura-encabezado-modificar-perfil-modal.component.css',
})
export class EstructuraEncabezadoModificarPerfilModalComponent
    implements OnInit
{
    usuario: Usuario;
    passwordVisible: boolean = false;
    passwordConfirmacionVisible: boolean = false;
    colores: string[] = paletaColores;

    registroForm: FormGroup<{
        nombre: FormControl<string>;
        apellido: FormControl<string>;
        correo: FormControl<string>;
        contrasena: FormControl<string>;
        contrasenaConfirmacion: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    ngOnInit(): void {
        this.usuario = this.authService.getUsuarioActual();
    }

    contrasenaConfirmacionOnChange(): void {}

    onSubmit(): void {
        console.log('Submit');
    }

    constructor(private authService: AuthService) {}
}
