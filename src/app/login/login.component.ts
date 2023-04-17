import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { MatDialog } from '@angular/material/dialog';
import { DummyDialogComponent } from '../dummy-dialog/dummy-dialog.component';

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
    public dialog: MatDialog
  ) {}

  // you can remove this method but it is only used because of lint complaining that it is empty
  ngOnInit(): void {
    console.log('ngOnInit is called');
  }

  login() {
    const email = this.loginFormGroup.controls['email'].value;
    const password = this.loginFormGroup.controls['password'].value;

    //let email: string = this.loginFormGroup.get('email')?.value;
    if (email && password) {
      const loggedinUser: User = {
        email: email,
        password: password,
      };
      console.log(loggedinUser);
    } else {
      throw new Error('die übermittelten Daten bei Login sind null');
    }

    //make REST call
    //this is how to route to other components
    //this.router.navigate(['program-overview']);
  }

  openDummyDialog() {
    //opens the DialogComponent
    //you can further edit the look with f.e. saying the width is max 250px and so on
    //const refDialog =
    this.dialog.open(DummyDialogComponent, {
      disableClose: true,
    });

    //needed if you want to do something with the data after closing the dialog
    //normally the rest call happens in the Dialog but it depends on the data
    // refDialog.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
