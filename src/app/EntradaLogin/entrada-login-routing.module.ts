import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaLoginComponent } from './entrada-login.component';
import { AuthRedirectGuardFn } from '../guards/authRedirect.guards';

const routes: Routes = [
    {
        path: '',
        component: EntradaLoginComponent,
        canActivate: [AuthRedirectGuardFn],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntradaLoginRoutingModule {}
