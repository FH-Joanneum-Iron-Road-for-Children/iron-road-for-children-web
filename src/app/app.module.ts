import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { ProgramComponent } from './program/view/program.component';
import { RouterLink } from '@angular/router';
import { AddEventComponent } from './program/add/add-event/add-event.component';
import { MatSelectModule } from '@angular/material/select';
import { ProgramFiltersComponent } from './program/view/program-filters/program-filters.component';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { MatChipsModule } from '@angular/material/chips';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EventFormComponent } from './program/shared/event-form/event-form.component';
import { VotingComponent } from './voting/voting.component';
import { VotingElementComponent } from './voting/voting-element/voting-element.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { VotingCardComponent } from './voting/voting-element/voting-card/voting-card.component';
import { EventFormEditButtonsComponent } from './program/shared/event-form/event-form-edit-buttons/event-form-edit-buttons.component';
import { MatCardModule } from '@angular/material/card';
import { CategoryDialogComponent } from './program/shared/event-dialog/category-dialog/category-dialog.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { LocationDialogComponent } from './program/shared/event-dialog/location-dialog/location-dialog.component';
import { VotingAddEditComponent } from './voting/add-edit/voting-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgramViewComponent } from './program/view/program-view/program-view.component';
import { EditEventComponent } from './program/edit/edit-event/edit-event.component';
import { EventDialogComponent } from './program/shared/event-dialog/event-dialog.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { registerLocaleData } from '@angular/common';
import localeAt from '@angular/common/locales/de-AT';
import { VotingWrapperComponent } from './voting/voting-wrapper/voting-wrapper.component';
import { EventListComponent } from './voting/add-edit/event-list/event-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

registerLocaleData(localeAt, 'de-AT');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramComponent,
    ProgramFiltersComponent,
    AddEventComponent,
    ProgramViewComponent,
    NavigationComponent,
    CategoryDialogComponent,
    EventFormComponent,
    EventFormEditButtonsComponent,
    EventDialogComponent,
    EditEventComponent,
    LocationDialogComponent,
    VotingComponent,
    VotingElementComponent,
    VotingCardComponent,
    VotingAddEditComponent,
    ConfirmDialogComponent,
    VotingWrapperComponent,
    EventListComponent,
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
    NgxMatNativeDateModule,
    NgxMatMomentModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ],
  providers: [HttpClient, { provide: LOCALE_ID, useValue: 'de-AT' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
