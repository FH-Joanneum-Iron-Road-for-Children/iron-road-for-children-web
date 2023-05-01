import { NgModule } from '@angular/core';

import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { AddEventComponent } from './add-event/add-event.component';

//insert here more routes when needed
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'program',
    component: ProgramComponent,
  },
  {
    path: 'program/add',
    component: AddEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
