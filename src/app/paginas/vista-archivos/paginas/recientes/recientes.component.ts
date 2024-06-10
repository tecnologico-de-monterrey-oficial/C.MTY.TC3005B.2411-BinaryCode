import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { RecientesService } from '../../../../servicios/recientes.services';

@Component({
    selector: 'app-recientes',
    templateUrl: './recientes.component.html',
})
export class RecientesComponent implements OnInit {
    archivos: Archivo[] = [];

    constructor(private recientesService: RecientesService) {}

    ngOnInit(): void {
        this.recientesService.getLatestFiles().subscribe(data => {
            this.archivos = data;
        });
    }
}
