import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'survey', loadChildren: './survey/survey.module#SurveyModule' },
            { path: 'question', loadChildren: './question/question.module#QuestionModule' },
            { path: 'survey/new', loadChildren: './survey/new-survey/new-survey.module#NewSurveyModule' },
            { path: 'survey/:id', loadChildren: './survey/new-survey/new-survey.module#NewSurveyModule' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
