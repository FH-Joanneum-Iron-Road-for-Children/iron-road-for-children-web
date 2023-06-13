import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { EventService } from '../services/event/event.service';
import { EventLocationService } from '../services/event/event-location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.min(8)),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private eventService: EventService,
    private eventLocationService: EventLocationService
  ) {}

  ngOnInit(): void {
    this.eventLocationService
      .getAllEventLocations()
      .subscribe((events) => console.log('eventsLocations', events));
  }

  login() {
    const email = this.loginFormGroup.controls['email'].value;
    const password = this.loginFormGroup.controls['password'].value;

    if (email && password) {
      const loggedinUser: User = {
        email: email,
        password: password,
      };
      console.log(loggedinUser);
    } else {
      throw new Error('die übermittelten Daten bei Login sind null');
    }

    this.router.navigate(['program']);
  }
}
