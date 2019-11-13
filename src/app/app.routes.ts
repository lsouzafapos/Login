
import { Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';

import { LoginGuard } from './login-guard';
import { LoginComponent } from './login/login.component';


export const appRoutes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
