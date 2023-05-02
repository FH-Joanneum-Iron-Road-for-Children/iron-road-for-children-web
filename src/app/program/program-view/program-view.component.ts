import { Component } from '@angular/core';
import { EventDto } from '../../models/models';
import { EVENT_DATA } from '../../services/test-data';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css'],
})
export class ProgramViewComponent {
  public events: EventDto[] = EVENT_DATA;
}
