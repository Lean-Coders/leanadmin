import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatNativeDateModule,
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
      MatSortModule
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
      MatSortModule
  ]
})

export class MaterialModule {}
