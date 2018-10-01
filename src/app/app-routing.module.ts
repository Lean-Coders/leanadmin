import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { ReservationComponent } from "./adminboard/reservation/reservation.component";
import { AuthGuard } from "./auth/login/auth.guard";
import { DashboardComponent } from "./adminboard/dashboard/dashboard.component";
import { AdminboardLayoutComponent } from "./layouts/adminboard-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import {TableEditComponent} from "./adminboard/reservation/table-edit/table-edit.component";
import {TableAddComponent} from "./adminboard/reservation/table-add/table-add.component";

const routes: Routes = [
    {
        path: '',
        component: AdminboardLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'reservation',
                component: ReservationComponent
            },
            {
                path: 'table-edit',
                component: TableEditComponent
            },
            {
                path: 'table-add',
                component: TableAddComponent
            }
        ]
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot',
                component: ForgotComponent
            }
        ]
    },

    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
