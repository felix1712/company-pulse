import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSurveyComponent } from './new-survey.component';

const routes: Routes = [
    {
      path: '', component: NewSurveyComponent,
    },
    {
      path: ':id', component: NewSurveyComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSurveyRoutingModule { }
