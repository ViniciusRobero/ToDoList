import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../core/models/item';
import { Assignment } from '../../core/models/assignment';
import { ItemService } from '../../core/services/item.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() items: Item[];
  @Input() assignment: Assignment;
  discription: string= '';
  checked: boolean;

  constructor(private itemService: ItemService) { }

  createItem() {
    this.itemService.create(this.discription, this.assignment.Id)
      .subscribe(items => this.items = items);
    this.discription = '';
  }
  checkItem(item: Item) {
    this.itemService.update(item);
  }

  deleteItem(id: number, i: number) {
    this.itemService.delete(id);
    this.items.splice(i, 1);
  }
}
