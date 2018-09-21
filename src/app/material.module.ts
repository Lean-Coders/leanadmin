import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatNativeDateModule, MatPaginatorModule,
    MatSidenavModule, MatSortModule, MatTableModule,
    MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatDatepickerModule
  ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatDatepickerModule
  ]
})

export class MaterialModule {}
