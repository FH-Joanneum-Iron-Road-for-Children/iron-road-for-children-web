import { Component, OnInit } from '@angular/core';
import { EventCategoryDto, EventDto } from '../../models/models';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  public events: EventDto[] = [];
  public originalEventList: EventDto[] = []; // for filtering
  public categories: EventCategoryDto[] = [];
  private selectedChips: any;
  dates: string[] = ['Fr, 28.07.2023', 'Sa, 29.07.2023', 'So, 30.07.2023'];

  constructor(private eventService: EventService) {}

  // TODO: update view if category list is updated
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.originalEventList = this.events;
    this.categories = this.eventService.getCategories();
  }

  onSelectedChipsChange(selectedChips: any): void {
    this.selectedChips = selectedChips;
    if (selectedChips.length != 0) {
      this.filterEvents();
    } else {
      this.events = this.originalEventList;
    }
  }

  filterEvents() {
    this.events = this.originalEventList.filter((event) => {
      // if matches any filter set
      return this.selectedChips.some((chip: string) => {
        return event.category?.name?.includes(chip);
      });
    });
  }
}
