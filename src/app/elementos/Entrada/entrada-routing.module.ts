import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaPaginaComponent } from './components/entrada-pagina/entrada-pagina.component';

const routes: Routes = [{ path: '', component: EntradaPaginaComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntradaRoutingModule {}
