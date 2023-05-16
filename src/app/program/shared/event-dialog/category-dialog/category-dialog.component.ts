import { Component } from '@angular/core';
import { EventCategoryDto } from '../../../../models/models';
import { CATEGORY_DATA } from '../../../../test-data/test-data';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent {
  categoryList: EventCategoryDto[] = CATEGORY_DATA;

  saveCategories() {}
}
