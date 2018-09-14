import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { AdminboardComponent } from "./adminboard/adminboard.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { ReservationComponent } from "./adminboard/reservation/reservation.component";
import { AuthGuard } from "./auth/login/auth.guard";
import { DashboardComponent } from "./adminboard/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: AdminboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'reservation',
        component: ReservationComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot',
        component: ForgotComponent
    },

    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
