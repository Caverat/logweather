import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeNb from '@angular/common/locales/nb';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorDetailComponent } from './components/sensor-detail/sensor-detail.component';
import { SensorReadingsComponent } from './components/sensor-readings/sensor-readings.component';

import { MatListModule, MatCardModule, MatToolbarModule,
          MatTableModule, MatSortModule, MatButtonModule,
          MatSidenavModule, MatIconModule, MatInputModule,
          MatSelectModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

registerLocaleData(localeNb);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SensorListComponent,
    SensorDetailComponent,
    SensorReadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nb'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
