import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
})
export class CategoryDialogComponent {
  categories: string[] = ['Musik', 'Tattoo', 'Food & Drinks', ' Ausfahrten'];
  newCategory: any;
  categoriesFormGroup = new FormGroup({
    categoryName: new FormControl('', Validators.min(1)),
  });

  removeCategory(name: string) {
    const index = this.categories.indexOf(name);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  addCategory() {
    this.newCategory = this.categoriesFormGroup.controls['categoryName'].value;

    if (this.newCategory && !this.categories.includes(this.newCategory)) {
      this.categories.push(this.newCategory);
      this.newCategory = '';
    }
  }
}
