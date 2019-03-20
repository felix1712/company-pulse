import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent} from './survey.component';
import {SelectModule} from 'ng2-select';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SelectModule
  ],
  declarations: [SurveyComponent]
})
export class SurveyModule { }
