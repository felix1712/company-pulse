import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: './layouts/layout.module#LayoutModule'
  },
  {
    path: 'result',
    component: ResultsComponent
  },
  {
    path: 'todos',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
