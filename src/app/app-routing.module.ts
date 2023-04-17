import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

//insert here more routes when needed
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
