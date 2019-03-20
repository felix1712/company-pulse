import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { StarRatingModule } from 'angular-star-rating';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    StarRatingModule.forRoot(),
    NouisliderModule,
    ReactiveFormsModule
  ],
  declarations: [QuestionComponent]
})
export class QuestionModule { }
