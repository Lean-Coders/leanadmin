import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from "./material.module";
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminboardComponent } from './adminboard/adminboard.component';
import { ReservationComponent } from "./adminboard/reservation/reservation.component";
import { AuthService } from "./auth/login/auth.service";
import { AuthGuard } from "./auth/login/auth.guard";
import { DashboardComponent } from './adminboard/dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AdminboardLayoutComponent } from "./layouts/adminboard-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { ChartsModule } from "ng2-charts";
import { TableEditComponent } from './adminboard/reservation/table-edit/table-edit.component';
import { TableAddComponent } from './adminboard/reservation/table-add/table-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminboardLayoutComponent,
    LoginLayoutComponent,
    NavigationComponent,
    LoginComponent,
    ForgotComponent,
    AdminboardComponent,
    ReservationComponent,
    DashboardComponent,
    TableEditComponent,
    TableAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
