import { Component, OnInit } from '@angular/core';
import { EventCategoryDto, EventDto } from '../../models/models';
import { EventService } from '../../services/event.service';
import { DateConverterService } from '../../services/date-converter.service';
import { EventCategoriesService } from '../../services/event-categories.service';

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  public events: EventDto[] = [];
  public originalEventList: EventDto[] = []; // for resetting the list
  public categories: EventCategoryDto[] = [];
  private selectedCategoryChips: any = '';
  private selectedDateChips: any = 0;

  dates: number[] = [];

  constructor(
    private eventService: EventService,
    private eventCategoryService: EventCategoriesService,
    private dateConverterService: DateConverterService
  ) {}

  ngOnInit(): void {
    this.eventService
      .getAllEvents()
      .subscribe((events) => (this.events = events));

    this.eventCategoryService
      .getAllEventCategories()
      .subscribe((categories) => (this.categories = categories));
    this.originalEventList = this.events;

    // get dates from both startDateTime and endDateTime properties
    const startTimestamps = this.events.map(
      (event) => event.startDateTimeInUTC
    );
    const endTimestamps = this.events.map((event) => event.endDateTimeInUTC);
    this.dates = startTimestamps.concat(endTimestamps);
    this.dates = this.getUniqueDates();
  }

  private getUniqueDates(): number[] {
    const uniqueDatesSet = new Set<number>();

    this.dates.forEach((date) => {
      const dateFormat = this.dateConverterService.getDateFromTimestamp(date);
      uniqueDatesSet.add(
        this.dateConverterService.getTimestampWithoutTimeFromDate(dateFormat)
      );
    });

    const uniqueDatesArray = Array.from(uniqueDatesSet);
    uniqueDatesArray.sort((a, b) => a - b); // order
    return uniqueDatesArray;
  }

  onSelectedCategoryChipsChange(selectedChips: any): void {
    this.selectedCategoryChips = selectedChips;
    this.filterEvents();
  }

  onSelectedDateChipsChange(selectedChips: any): void {
    this.selectedDateChips = selectedChips;
    this.filterEvents();
  }

  filterEvents() {
    if (this.selectedDateChips != 0 && this.selectedCategoryChips != '') {
      const chipTimestamp = this.dateConverterService.getTimestampWithoutTime(
        this.selectedDateChips
      );

      this.events = this.originalEventList.filter((event) => {
        return (
          (this.dateConverterService.getTimestampWithoutTime(
            event.startDateTimeInUTC
          ) == chipTimestamp ||
            this.dateConverterService.getTimestampWithoutTime(
              event.endDateTimeInUTC
            ) == chipTimestamp) &&
          event.category?.name?.includes(this.selectedCategoryChips)
        );
      });
    } else if (
      this.selectedDateChips == 0 &&
      this.selectedCategoryChips != ''
    ) {
      this.events = this.originalEventList.filter((event) => {
        return event.category?.name?.includes(this.selectedCategoryChips);
      });
    } else if (
      this.selectedCategoryChips == '' &&
      this.selectedDateChips != 0
    ) {
      const chipTimestamp = this.dateConverterService.getTimestampWithoutTime(
        this.selectedDateChips
      );
      this.events = this.originalEventList.filter((event) => {
        return (
          this.dateConverterService.getTimestampWithoutTime(
            event.startDateTimeInUTC
          ) == chipTimestamp ||
          this.dateConverterService.getTimestampWithoutTime(
            event.endDateTimeInUTC
          ) == chipTimestamp
        );
      });
    } else {
      this.events = this.originalEventList;
    }
  }
}
