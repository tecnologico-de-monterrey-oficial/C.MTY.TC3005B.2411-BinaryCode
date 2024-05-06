import { Component } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectoServices } from '../../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
    
    proyectos: Proyecto[] = [];

    constructor(private proyectoServices: ProyectoServices, private router: Router, private route: ActivatedRoute) {
        this.proyectos = proyectoServices.getProyectos();
    }
    navigateToUnidades(id: string) {
        console.log("Hola")
        console.log("ID del proyecto:", id); // Verifica si el id se está pasando correctamente
        this.router.navigate(['/proyectos', id, 'unidades'], { relativeTo: this.route });
      }
}
