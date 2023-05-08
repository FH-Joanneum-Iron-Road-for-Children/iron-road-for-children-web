import { NgModule } from '@angular/core';

import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { VotingComponent } from './voting/voting.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddEditComponent } from './voting/add-edit/add-edit.component';

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
    path: 'voting',
    component: VotingComponent,
  },
  {
    path: 'program/add',
    component: AddEventComponent,
  },
  {
    path: 'program/edit/:id',
    component: EditEventComponent,
  },
  {path: 'voting', component: AddEditComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
