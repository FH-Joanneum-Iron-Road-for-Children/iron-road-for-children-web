import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: 'first-component', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



export class AppRoutingModule {


}
