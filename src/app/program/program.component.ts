import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit is called');
  }
}
