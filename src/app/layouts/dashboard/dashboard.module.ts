import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    Ng2Charts
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
