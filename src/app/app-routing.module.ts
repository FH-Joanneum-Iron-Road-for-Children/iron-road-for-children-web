import { NgModule } from '@angular/core';

import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/view/program.component';
import { AddEventComponent } from './program/add/add-event/add-event.component';
import { EditEventComponent } from './program/edit/edit-event/edit-event.component';

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
  {
    path: 'program/edit/:id',
    component: EditEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
