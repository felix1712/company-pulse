import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { NewSurveyRoutingModule } from './new-survey-routing.module';
import { NewSurveyComponent } from './new-survey.component';
import {SelectModule} from 'ng2-select';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewSurveyRoutingModule,
    SelectModule,
    NKDatetimeModule
  ],
  declarations: [NewSurveyComponent]
})
export class NewSurveyModule { }
