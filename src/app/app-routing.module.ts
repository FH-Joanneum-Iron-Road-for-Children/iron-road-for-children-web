import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { EditEventComponent } from './edit-event/edit-event.component';

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
    path: 'program/edit',
    component: EditEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
