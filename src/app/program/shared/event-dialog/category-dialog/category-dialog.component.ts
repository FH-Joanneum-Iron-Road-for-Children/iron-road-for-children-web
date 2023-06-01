import { Component, OnInit } from '@angular/core';
import { EventCategoryDto } from '../../../../models/models';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent implements OnInit {
  categoryList: EventCategoryDto[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.categoryList = this.eventService.getCategories();
  }

  saveCategories() {
    // TODO
  }
}
