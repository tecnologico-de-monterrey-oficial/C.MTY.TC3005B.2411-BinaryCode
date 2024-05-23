import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    proyectos: Proyecto[] = [];
    esqueleto: boolean = true;
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    constructor(
        private proyectoServices: ProyectosService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    async ngOnInit(): Promise<void> {
        this.esqueleto = true;
        this.proyectos = await this.proyectoServices.getProyectos();
        this.esqueleto = false;
    }

    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }

    crearProyecto(proyecto: Proyecto): void {
        this.proyectos.push(proyecto);
    }

    borrarProyecto(id: number): void {
        this.proyectos = this.proyectos.filter(p => p.id !== id);
    }

    actualizarProyecto(proyecto: Proyecto): void {
        const index: number = this.proyectos.findIndex(
            p => p.id === proyecto.id
        );
        this.proyectos[index] = proyecto;
    }
}
