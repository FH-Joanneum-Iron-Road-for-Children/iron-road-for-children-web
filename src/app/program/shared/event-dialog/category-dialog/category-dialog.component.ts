import { Component, OnInit } from '@angular/core';
import { EventCategoryDto } from '../../../../models/models';
import { EventCategoriesService } from '../../../../services/event-categories.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent implements OnInit {
  categoryList: EventCategoryDto[] = [];

  constructor(private eventCategoryService: EventCategoriesService) {}

  ngOnInit(): void {
    this.eventCategoryService
      .getAllEventCategories()
      .subscribe((categories) => (this.categoryList = categories));
  }

  saveCategories() {
    const eventCategory: EventCategoryDto = {
      id: 0,
      name: 'Ausfahrten',
    };
    this.eventCategoryService
      .createEventCategory(eventCategory)
      .subscribe((result) => console.log(result));

    // TODO
  }
}
