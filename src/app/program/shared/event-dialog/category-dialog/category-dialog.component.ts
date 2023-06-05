import {Component, Inject, OnInit} from '@angular/core';
import {EventCategoryDto} from '../../../../models/models';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EventCategoriesService} from "../../../../services/event-categories.service";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent implements OnInit {
  categoryList: EventCategoryDto[] = [];

  constructor(private eventCategoryService: EventCategoriesService,
  @Inject(MAT_DIALOG_DATA) public data: EventCategoryDto[]
  ) {}

  ngOnInit(): void {
    this.categoryList = this.data;
  }

  saveCategories() {
    let eventCategory: EventCategoryDto={
      eventCategoryId: undefined,
      name: 'Ausfahrteb'
    }
    this.eventCategoryService.createEventCategory(eventCategory).subscribe((result) => console.log(result));

    // TODO
  }
}
