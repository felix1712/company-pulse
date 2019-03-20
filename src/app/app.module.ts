import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { SurveysService } from './services/surveys.service';
import { ResultsService } from './services/results.service';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { LayoutComponent } from './layouts/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    RouterModule,
  ],
  providers: [
    SurveysService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
