import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { VotingComponent } from './voting/voting.component';

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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
