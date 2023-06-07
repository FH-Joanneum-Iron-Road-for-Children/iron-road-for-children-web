import { Component, OnInit } from '@angular/core';
import { EventLocationDto, Item } from '../../../../models/models';
import { EventLocationService } from '../../../../services/event-location.service';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent implements OnInit {
  locations: EventLocationDto[] = [];
  locationList: Item[] = [];

  constructor(private eventLocationService: EventLocationService) {}

  ngOnInit(): void {
    this.eventLocationService.getAllEventLocations().subscribe((locations) => {
      this.locations = locations;

      // map to Item[] so it can be used in shared event-dialog component
      this.locationList = locations.map((location) => {
        return {
          id: location.eventLocationId,
          name: location.name,
        };
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
