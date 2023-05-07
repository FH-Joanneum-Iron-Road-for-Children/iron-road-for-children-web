import { LOCALE_ID, NgModule } from '@angular/core';
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
import { ProgramComponent } from './program/view/program.component';
import { DummyDialogComponent } from './dummy-dialog/dummy-dialog.component';
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
import { DeleteDialogComponent } from './program/view/delete-dialog/delete-dialog.component';
import { EventFormEditButtonsComponent } from './program/shared/event-form/event-form-edit-buttons/event-form-edit-buttons.component';
import { ProgramViewComponent } from './program/view/program-view/program-view.component';
import { MatCardModule } from '@angular/material/card';
import { EditEventComponent } from './program/edit/edit-event/edit-event.component';
import { CategoryDialogComponent } from './program/shared/event-dialog/category-dialog/category-dialog.component';
import { EventDialogComponent } from './program/shared/event-dialog/event-dialog.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';

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
    EditEventComponent,
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
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-AT' }],
  bootstrap: [AppComponent],
  entryComponents: [DummyDialogComponent, DeleteDialogComponent],
})
export class AppModule {}
