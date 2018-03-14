import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../core/services/assignment.service';
import { ItemService } from '../../core/services/item.service';
import { Assignment } from '../../core/models/assignment';
import { Item } from '../../core/models/item';
import { UpdateAssignmentComponent } from '../dialogs/update/update.assigment.component'
import { DeleteAssignmentComponent } from '../dialogs/delete/delete.assignment.component'

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignments: Assignment[];
  items: Item[] = new Array();
  discription: string = '';
  selectedAnyList: boolean = false;
  assignment: Assignment;

  constructor(private assignmentService: AssignmentService,
    public dialog: MatDialog,
    private itemService: ItemService) { }

  ngOnInit() {
    this.assignmentService
      .getall()
      .subscribe(assignments => this.assignments = assignments);
  }

  createAssignment() {
    this.assignmentService.create({ Discription: this.discription } as Assignment)
      .subscribe(assignment => {
        this.assignments.push(assignment);
        this.showItems(assignment);
      });;
      this.discription = '';
   }

  showItems(assignment: Assignment) {
    this.itemService.getallByAssignmentId(assignment.Id)
      .subscribe(items => this.items = items);

    this.assignment = assignment;
    this.selectedAnyList = true;
  }

  deleteAssignment(assignment: Assignment, i: number) {
    this.assignmentService.delete(assignment.Id);
    this.assignments.splice(i, 1);
    this.items = [];
  }

  showUpdateDialog(assignment: Assignment, i: number): void {
    let dialogRef = this.dialog.open(UpdateAssignmentComponent, {
      width: '40%',
      data: assignment
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined)
        this.assignments[i] = result;
    });
  }

  showDeleteDialog(assignment: Assignment, i: number): void {
    let dialogRef = this.dialog.open(DeleteAssignmentComponent, {
      width: '30%',
      data: assignment
    });

    dialogRef.afterClosed().subscribe(isDeleted =>
      this.spliceIfIsDelete(i, isDeleted)
    );
  }

  spliceIfIsDelete(i: number, isDeleted: boolean) {
    if (isDeleted) {
      this.assignments.splice(i, 1);
      this.items = [];
    }
  }
}
