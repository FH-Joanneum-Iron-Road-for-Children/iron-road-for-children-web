import { Component, OnInit } from '@angular/core';
import { EventCategoryDto, EventDto } from '../../models/models';
import { EventService } from '../../services/event.service';
import { DateConverterService } from '../../services/date-converter.service';

interface Item {
  // for test data
  startDateTime: number;
  endDateTime: number;
}

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  public events: EventDto[] = [];
  public originalEventList: EventDto[] = []; // for resetting the list
  public categories: EventCategoryDto[] = [];
  private selectedCategoryChips: any = [];
  private selectedDateChips: any = [];

  dates: number[] = [];

  testDates: Item[] = [
    // test data
    { startDateTime: 1690555193, endDateTime: 1690641593 },
    { startDateTime: 1690641593, endDateTime: 1690641000 },
    { startDateTime: 1690727000, endDateTime: 1690727000 },
    { startDateTime: 1690727030, endDateTime: 1690727050 },
  ];

  constructor(
    private eventService: EventService,
    private dateConverterService: DateConverterService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.originalEventList = this.events;

    // get dates from both startDateTime and endDateTime properties
    const startTimestamps = this.testDates.map((event) => event.startDateTime);
    const endTimestamps = this.testDates.map((event) => event.endDateTime);
    this.dates = startTimestamps.concat(endTimestamps);
    this.dates = this.getUniqueDates();
    this.categories = this.eventService.getCategories();
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

  onSelectedDateChipsChange(selectedChips: any): void {}

  onSelectedCategoryChipsChange(selectedChips: any): void {
    this.selectedCategoryChips = selectedChips;
    if (selectedChips.length != 0) {
      this.filterEvents();
    } else {
      this.events = this.originalEventList;
    }
  }

  filterEvents() {
    this.events = this.originalEventList.filter((event) => {
      // if matches any filter set
      return this.selectedCategoryChips.some((chip: string) => {
        return event.category?.name?.includes(chip);
      });
    });
  }
}
