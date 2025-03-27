import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { OlvidoContrasenaComponent } from './componentes/olvido-contrasena/olvido-contrasena.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'olvido-contrasena', component: OlvidoContrasenaComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
