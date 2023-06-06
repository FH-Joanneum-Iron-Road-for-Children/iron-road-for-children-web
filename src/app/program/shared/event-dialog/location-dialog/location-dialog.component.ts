import { Component, OnInit } from '@angular/core';
import { EventLocationDto, Item } from '../../../../models/models';
import { EventService } from '../../../../services/event.service';
import { EventLocationService } from '../../../../services/event-location.service';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent implements OnInit {
  locations: EventLocationDto[] = [];
  locationList: Item[] = [];

  constructor(
    private eventService: EventService,
    private eventLocationService: EventLocationService
  ) {}

  ngOnInit(): void {
    this.eventLocationService
      .getAllEventLocations()
      .subscribe((result) => (this.locations = result));

    // map to Item[] so it can be used in shared event-dialog component
    this.locationList = this.locations.map((location) => {
      return {
        id: location.eventLocationId,
        name: location.name,
      };
    });
  }

  saveLocations() {
    const eventLocation: EventLocationDto = {
      eventLocationId: 0,
      name: 'Location1',
    };
    this.eventLocationService
      .createEventLocation(eventLocation)
      .subscribe((result) => console.log(result));
  }
}
