import { Component, Input } from '@angular/core';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-individual',
    templateUrl: './personas-individual.component.html',
    styleUrl: './personas-individual.component.css',
})
export class PersonasIndividualComponent {
    @Input() usuario: Usuario;
}
