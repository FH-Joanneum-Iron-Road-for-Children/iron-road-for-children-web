import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.css'],
})
export class ProgramFiltersComponent {
  constructor(private router: Router) {}

  openDialogToEditCategory() {
    //openDialog
  }

  goToAddEvent() {
    this.router.navigate(['program/add']);
  }
}
