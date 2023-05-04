import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddEditComponent } from './voting/add-edit/add-edit.component';
import {MatInputModule} from "@angular/material/input";
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
import { EventFormComponent } from './event-form/event-form.component';
import { DeleteDialogComponent } from './program/delete-dialog/delete-dialog.component';
import { VotingComponent } from './voting/voting.component';
import { NewVotingButtonComponent } from './voting/new-voting-button/new-voting-button.component';
import { VotingElementComponent } from './voting/voting-element/voting-element.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { VotingCardComponent } from './voting/voting-element/voting-card/voting-card.component';
import { EventFormEditButtonsComponent } from './event-form/event-form-edit-buttons/event-form-edit-buttons.component';
import { MatCardModule } from '@angular/material/card';
import { CategoryDialogComponent } from './event-dialog/category-dialog/category-dialog.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { ProgramViewComponent } from './program/program-view/program-view.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramComponent,
    DummyDialogComponent,
    ProgramFiltersComponent,
    AddEventComponent,
    ProgramViewComponent,
    DeleteDialogComponent,
    NavigationComponent,
    CategoryDialogComponent,
    EventFormComponent,
    EventFormEditButtonsComponent,
    EventDialogComponent,
    VotingComponent,
    NewVotingButtonComponent,
    VotingElementComponent,
    VotingCardComponent,
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
    MatCardModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DummyDialogComponent, DeleteDialogComponent],
})
export class AppModule {}
