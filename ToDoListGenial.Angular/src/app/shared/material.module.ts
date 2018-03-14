import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatInputBase,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
