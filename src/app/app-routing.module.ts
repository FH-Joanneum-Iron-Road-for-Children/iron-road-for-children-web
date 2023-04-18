import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AddEditComponent } from './voting/add-edit/add-edit.component';

const routes: Routes = [
{path: 'voting', component: AddEditComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule {


}