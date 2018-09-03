import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatNativeDateModule,
    MatSidenavModule,
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
  ]
})

export class MaterialModule {}
