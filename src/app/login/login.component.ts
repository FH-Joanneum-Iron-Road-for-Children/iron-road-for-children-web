import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { EventLocationService } from '../services/event-location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* is commented out because lint is complaining because it is not used
  validatedLogin: boolean = false;
 */
  // user = User |undefined;

  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.min(8)),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,

    private eventService: EventService,
    private eventLocationService: EventLocationService
  ) {}

  // you can remove this method but it is only used because of lint complaining that it is empty
  ngOnInit(): void {
    console.log('ngOnInit is called');

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
