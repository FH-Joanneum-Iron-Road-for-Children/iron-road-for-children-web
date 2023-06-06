import { Component, OnInit } from '@angular/core';
import { EventLocationDto } from '../../../../models/models';
import { EventService } from '../../../../services/event.service';
import {EventCategoriesService} from "../../../../services/event-categories.service";
import {EventLocationService} from "../../../../services/event-location.service";

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent implements OnInit {
  locationList: EventLocationDto[] = [];

  constructor(private eventService: EventService,
              private eventLocationService: EventLocationService) {}

  ngOnInit(): void {
    this.eventLocationService.getAllEventLocations().subscribe((result) => this.locationList = result);
  }

  saveLocations() {
    const eventLocation: EventLocationDto ={
      id: 0,
      name: 'Location1'
    }
    this.eventLocationService.createEventLocation(eventLocation).subscribe((result) => console.log(result));
  }
}
