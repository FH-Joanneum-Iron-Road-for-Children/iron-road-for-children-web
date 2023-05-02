import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { EventDto } from '../models/models';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  id: any;

  @Input() event: EventDto | null = null;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.event = this.eventService.getEventById(this.id) as EventDto;
    });
  }
}
