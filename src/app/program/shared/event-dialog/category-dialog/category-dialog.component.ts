import { Component, OnInit } from '@angular/core';
import { EventCategoryDto, Item } from '../../../../models/models';
import { EventCategoriesService } from '../../../../services/event-categories.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent implements OnInit {
  categories: EventCategoryDto[] = [];
  categoryList: Item[] = [];

  constructor(private eventCategoryService: EventCategoriesService) {}

  ngOnInit(): void {
    this.eventCategoryService
      .getAllEventCategories()
      .subscribe((categories) => {
        this.categories = categories;

        // map to Item[] so it can be used in shared event-dialog component
        this.categoryList = this.categories.map((category) => {
          return {
            id: category.eventCategoryId,
            name: category.name,
          };
        });
      });
  }

  saveCategories() {
    const eventCategory: EventCategoryDto = {
      eventCategoryId: 0,
      name: 'Ausfahrten',
    };
    this.eventCategoryService
      .createEventCategory(eventCategory)
      .subscribe((result) => console.log(result));

    // TODO
  }
}
