import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { EventDto } from '../../../models/models';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  id: number | undefined;
  event: EventDto | undefined;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value) => (this.id = value['id']));
    if (this.id) {
      this.eventService
        .getEventByEventId(this.id)
        .subscribe((event) => (this.event = event));
      console.log(this.event);
    }
  }
}
