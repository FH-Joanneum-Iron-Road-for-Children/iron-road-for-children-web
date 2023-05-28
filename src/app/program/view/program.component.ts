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
  public categories: EventCategoryDto[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.categories = this.eventService.getCategories();
  }
}
