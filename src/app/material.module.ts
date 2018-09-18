import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatFormFieldModule,
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
      MatPaginatorModule
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
      MatPaginatorModule
  ]
})

export class MaterialModule {}
