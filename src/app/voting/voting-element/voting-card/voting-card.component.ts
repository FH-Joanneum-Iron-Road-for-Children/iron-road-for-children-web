import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css'],
})
export class VotingCardComponent {
  @Output() deleteCardEvent = new EventEmitter<string>();

  deleteCard() {
    this.deleteCardEvent.emit();
  }

  @Input()
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';

  @Input()
  get text(): string {
    return this._text;
  }

  set text(name: string) {
    this._text = (name && name.trim()) || '<Bitte Text hinzufügen>';
  }

  private _text = '';

  selectedImage!: File;
  imageUrl!: string;

  fileName = '';

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedImage);
  }
}
