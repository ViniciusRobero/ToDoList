import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentService } from './core/services/assignment.service';
import { ItemService } from './core/services/item.service';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ItemComponent } from './components/item/item.component';
import { MaterialModule } from "./shared/material.module";
import { UpdateAssignmentComponent } from './components/dialogs/update/update.assigment.component';
import { DeleteAssignmentComponent } from './components/dialogs/delete/delete.assignment.component'

import { MatDialogModule, MatDialog } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    ItemComponent,
    UpdateAssignmentComponent,
    DeleteAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [
    ItemService,
    AssignmentService,
    MatDialog
  ],
  entryComponents: [
    UpdateAssignmentComponent,
    DeleteAssignmentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
