import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectosService } from '../../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
    proyectos: Proyecto[] = [];

    constructor(
        private proyectoService: ProyectosService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    async ngOnInit(): Promise<void> {
        this.proyectos = await this.proyectoService.getProyectos();
    }
}
