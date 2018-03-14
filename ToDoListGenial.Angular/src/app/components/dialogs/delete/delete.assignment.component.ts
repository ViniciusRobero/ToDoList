import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Assignment } from '../../../core/models/assignment';
import { AssignmentService } from '../../../core/services/assignment.service';

@Component({
  selector: 'app-delete.assignment',
  templateUrl: './delete.assignment.component.html',
  styleUrls: ['./delete.assignment.component.css']
})
export class DeleteAssignmentComponent {

  constructor(private assignmentService: AssignmentService,
    public dialogRef: MatDialogRef<DeleteAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public assignment: Assignment) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  delete() {
    this.assignmentService.delete(this.assignment.Id);
    this.dialogRef.close(true);
  }
}
