import { Component, OnInit } from '@angular/core';
import { EventDto, EventLocationDto, Item } from '../../../../models/models';
import { EventLocationService } from '../../../../services/event/event-location.service';
import { EventService } from '../../../../services/event/event.service';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent implements OnInit {
  locations: EventLocationDto[] = [];
  locationList: Item[] = [];
  events: EventDto[] = [];
  isLoading = true;

  constructor(
    private eventService: EventService,
    private eventLocationService: EventLocationService
  ) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;

      this.eventLocationService
        .getAllEventLocations()
        .subscribe((locations) => {
          this.locations = locations;

          // map to Item[] so it can be used in shared event-dialog component
          this.locationList = locations.map((location) => {
            //check if location is used in event list - not safe to delete
            const isInUse = this.events.some(
              (event) =>
                event.eventCategory.eventCategoryId === location.eventLocationId
            );

            return {
              id: location.eventLocationId,
              name: location.name,
              isInUse: isInUse,
            };
          });
          this.isLoading = false;
        });
    });
  }

  addLocations(addLocations: any[]) {
    for (const location of addLocations) {
      this.eventLocationService
        .createEventLocation({
          eventLocationId: location.id,
          name: location.name,
        })
        .subscribe((result) => console.log(result));
    }
  }

  deleteLocations(removeLocations: any[]) {
    for (const location of removeLocations) {
      this.eventLocationService
        .deleteEventLocationById(location.id)
        .subscribe((result) => console.log(result));
    }
  }
}
