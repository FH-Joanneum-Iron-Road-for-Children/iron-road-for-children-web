import { Component, OnInit } from '@angular/core';
import { EventCategoryDto, EventDto, Item } from '../../../../models/models';
import { EventCategoriesService } from '../../../../services/event/event-categories.service';
import { EventService } from '../../../../services/event/event.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent implements OnInit {
  categories: EventCategoryDto[] = [];
  categoryList: Item[] = [];
  events: EventDto[] = [];
  isLoading = true;

  constructor(
    private eventService: EventService,
    private eventCategoryService: EventCategoriesService
  ) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;

      this.eventCategoryService
        .getAllEventCategories()
        .subscribe((categories) => {
          this.categories = categories;

          // map to Item[] so it can be used in shared event-dialog component
          this.categoryList = this.categories.map((category) => {
            //check if category is used in event list - not safe to delete
            const isInUse = this.events.some(
              (event) =>
                event.eventCategory.eventCategoryId === category.eventCategoryId
            );

            return {
              id: category.eventCategoryId,
              name: category.name,
              isInUse: isInUse,
            };
          });
          this.isLoading = false;
        });
    });
  }

  addCategories(addCategoriesList: any[]) {
    for (const category of addCategoriesList) {
      this.eventCategoryService
        .createEventCategory({
          eventCategoryId: category.id,
          name: category.name,
        })
        .subscribe((result) => console.log(result));
    }
  }

  deleteCategories(removeCategoriesList: any[]) {
    for (const category of removeCategoriesList) {
      this.eventCategoryService
        .deleteEventCategoryById(category.id)
        .subscribe((result) => console.log(result));
    }
  }
}
