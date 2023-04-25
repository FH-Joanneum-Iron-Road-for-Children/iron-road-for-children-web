import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
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
import { ProgramFiltersComponent } from './program/program-filters/program-filters.component';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { MatChipsModule } from '@angular/material/chips';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramComponent,
    DummyDialogComponent,
    ProgramFiltersComponent,
    NavigationComponent,
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
    MatLegacyChipsModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
