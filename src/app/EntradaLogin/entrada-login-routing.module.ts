// entrada-login-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaLoginComponent } from './entrada-login.component';

const routes: Routes = [{ path: '', component: EntradaLoginComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntradaLoginRoutingModule {}
