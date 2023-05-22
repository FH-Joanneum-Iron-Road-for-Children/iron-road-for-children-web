import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { VotingElementComponent } from './voting-element/voting-element.component';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor() {}

  addComponent() {
    console.log('Hi Dad');
    this.container.createComponent(VotingElementComponent);
  }
}
