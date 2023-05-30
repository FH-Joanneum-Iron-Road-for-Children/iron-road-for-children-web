import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.min(8)),
  });

  constructor(private userService: UserService, private router: Router) {}

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
