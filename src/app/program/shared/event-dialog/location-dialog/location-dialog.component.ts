import { Component, OnInit } from '@angular/core';
import { EventLocationDto } from '../../../../models/models';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent implements OnInit {
  locationList: EventLocationDto[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.locationList = this.eventService.getLocations();
  }

  saveLocations() {
    // TODO
  }
}
