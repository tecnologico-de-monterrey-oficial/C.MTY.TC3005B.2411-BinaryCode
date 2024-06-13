import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { FavoritosService } from '../../../../servicios/favoritos.services';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
    styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
    archivos: Archivo[] = [];

    constructor(private favoritosService: FavoritosService) {}

    ngOnInit(): void {
        this.favoritosService.getFavoritos().subscribe(data => {
            this.archivos = data;
        });
    }
}
