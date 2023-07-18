import {NgModule} from '@angular/core';

import type {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular';
import {ProgramComponent} from './program/view/program.component';
import {VotingComponent} from './voting/view/voting.component';
import {AddEventComponent} from './program/add/add-event/add-event.component';
import {EditEventComponent} from './program/edit/edit-event/edit-event.component';
import {NotFoundComponent} from './error/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/program',
    pathMatch: 'full'
  },
  {
    path: 'program',
    component: ProgramComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'voting',
    component: VotingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'program/add',
    component: AddEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'program/edit/:id',
    component: EditEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**', // if none matches
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
