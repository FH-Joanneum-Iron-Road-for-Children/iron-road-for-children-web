import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataServiceService} from "../services/data-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  validatedLogin: boolean = false;

  // user = User |undefined;

  loginFormGroup = new FormGroup({
    email : new FormControl('', Validators.email),
    password : new FormControl('', Validators.min(8))
  })

  constructor(
   private dataService: DataServiceService
  ) {}

  ngOnInit(): void {


  }

  getFormValue(){
    let email = this.loginFormGroup.get('email')?.value;
    let password = this.loginFormGroup.get('password')?.value;

  }
}
