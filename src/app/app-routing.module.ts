import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';

//insert here more routes when needed
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
   {
    path: 'program',
    component: ProgramComponent,
   },
];

@NgModule({
  declarations: [],

  imports: [CommonModule],

})
export class AppRoutingModule {}
