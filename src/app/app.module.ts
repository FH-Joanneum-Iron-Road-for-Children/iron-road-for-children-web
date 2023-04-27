import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { DummyDialogComponent } from './dummy-dialog/dummy-dialog.component';
import { RouterLink } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { MatSelectModule } from '@angular/material/select';
import { ProgramFiltersComponent } from './program/program-filters/program-filters.component';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { MatChipsModule } from '@angular/material/chips';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AddEventFormComponent } from './add-event/add-event-form/add-event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramComponent,
    DummyDialogComponent,
    ProgramFiltersComponent,
    AddEventComponent,
    NavigationComponent,
    AddEventFormComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterLink,
    MatSelectModule,
    MatLegacyChipsModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
