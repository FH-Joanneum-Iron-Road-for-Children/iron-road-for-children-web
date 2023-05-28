import { Component, OnInit } from '@angular/core';
import { EventDto } from '../../models/models';

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  public events: EventDto[] = [];

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }
}
