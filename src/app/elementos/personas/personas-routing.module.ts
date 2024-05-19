import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasListaComponent } from './personas-lista/personas-lista.component';

const routes: Routes = [{ path: '', component: PersonasListaComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonasRoutingModule {}
