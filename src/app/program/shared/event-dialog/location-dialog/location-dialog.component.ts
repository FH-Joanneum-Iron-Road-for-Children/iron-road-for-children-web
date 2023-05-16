import { Component } from '@angular/core';
import { EventLocationDto } from '../../../../models/models';
import { LOCATION_DATA } from '../../../../test-data/test-data';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css'],
})
export class LocationDialogComponent {
  locationList: EventLocationDto[] = LOCATION_DATA;

  saveLocations() {}
}
