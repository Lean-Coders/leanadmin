import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { ReservationComponent } from "./dashboard/reservation/reservation.component";
import {AuthGuard} from "./auth/login/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '',
        component: ForgotComponent,
        children: [
            {
                path: 'forgot',
                component: ForgotComponent
            }
        ]
    },
    {
        path: '',
        component: ReservationComponent,
        children: [
            {
                path: 'reservation',
                component: ReservationComponent
            }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
