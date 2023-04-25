import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';

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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
