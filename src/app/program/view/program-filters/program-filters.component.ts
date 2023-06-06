import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryDialogComponent} from '../../shared/event-dialog/category-dialog/category-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {EventCategoryDto} from '../../../models/models';
import {DateConverterService} from '../../../services/date-converter.service';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.css'],
})
export class ProgramFiltersComponent {
  @Input() dateFilters: number[] = [];
  @Input() categoryFilters: EventCategoryDto[] = [];
  @Output() selectedCategoryChipsChange = new EventEmitter<string[]>();
  @Output() selectedDateChipsChange = new EventEmitter<Date[]>();

  @Output() categoriesList = new EventEmitter<EventCategoryDto[]>();

  selectedCategoryChips: string[] = [];
  selectedDateChips: Date[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dateConverterService: DateConverterService
  ) {
  }

  toggleCategoryChip(chip: string) {
    const index = this.selectedCategoryChips.indexOf(chip);

    if (index > -1) {
      // if found
      this.selectedCategoryChips.splice(index, 1);
    } else {
      this.selectedCategoryChips.push(chip);
    }
    this.selectedCategoryChipsChange.emit(this.selectedCategoryChips);
  }

  toggleDateChip(chip: number) {
    const index = this.selectedDateChips.findIndex(
      (date) =>
        this.dateConverterService.getTimestampWithoutTimeFromDate(date) ==
        this.dateConverterService.getTimestampWithoutTime(chip)
    );

    if (index > -1) {
      this.selectedDateChips.splice(index, 1);
    } else {
      this.selectedDateChips.push(
        this.dateConverterService.getDateWithoutTimeFromTimestamp(chip)
      );
    }
    this.selectedDateChipsChange.emit(this.selectedDateChips);
  }

  openDialogToEditCategory() {
    this.dialog.open(CategoryDialogComponent, {
      data: this.categoryFilters,
      disableClose: true,
      width: '45rem',
      height: '30rem',
    }).afterClosed().subscribe((result) => {
      window.location.reload();
    });
  }

  goToAddEvent() {
    this.router.navigate(['program/add']);
  }
}
