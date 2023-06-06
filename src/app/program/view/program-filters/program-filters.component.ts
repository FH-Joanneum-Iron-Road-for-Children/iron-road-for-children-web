import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryDialogComponent } from '../../shared/event-dialog/category-dialog/category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventCategoryDto } from '../../../models/models';
import { DateConverterService } from '../../../services/date-converter.service';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.css'],
})
export class ProgramFiltersComponent {
  @Input() dateFilters: number[] = [];
  @Input() categoryFilters: EventCategoryDto[] = [];
  @Output() selectedCategoryChipsChange = new EventEmitter<string>();
  @Output() selectedDateChipsChange = new EventEmitter<number>();

  selectedCategoryChips = '';
  selectedDateChips = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dateConverterService: DateConverterService
  ) {}

  toggleCategoryChip(chip: string) {
    if (this.selectedCategoryChips === chip) {
      this.selectedCategoryChips = '';
      this.selectedCategoryChipsChange.emit('');
    } else {
      this.selectedCategoryChips = chip;
      this.selectedCategoryChipsChange.emit(chip);
    }
  }

  toggleDateChip(chip: number) {
    if (
      this.dateConverterService.getTimestampWithoutTime(
        this.selectedDateChips
      ) === this.dateConverterService.getTimestampWithoutTime(chip)
    ) {
      this.selectedDateChips = 0;
      this.selectedDateChipsChange.emit(this.selectedDateChips);
    } else {
      this.selectedDateChips = chip;
      this.selectedDateChipsChange.emit(chip);
    }
  }

  openDialogToEditCategory() {
    this.dialog
      .open(CategoryDialogComponent, {
        disableClose: true,
        width: '45rem',
        height: '30rem',
      })
      .afterClosed()
      .subscribe((result) => {
        window.location.reload();
      });
  }

  goToAddEvent() {
    this.router.navigate(['program/add']);
  }
}
