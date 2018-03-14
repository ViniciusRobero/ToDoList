import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Assignment } from '../../../core/models/assignment';
import { AssignmentService } from '../../../core/services/assignment.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.assigment.component.html',
  styleUrls: ['./update.assigment.component.css']
})
export class UpdateAssignmentComponent  {
  public assignmentNotBind: Assignment;

  constructor(private assignmentService: AssignmentService,
    public dialogRef: MatDialogRef<UpdateAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public assignment: Assignment) {
    this.assignmentNotBind = Object.assign({}, assignment)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  salvar() {
    this.assignmentService.update(this.assignmentNotBind);
    this.dialogRef.close(this.assignmentNotBind);
  }
}
