import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateNewsCardComponent } from './components/update-news-card/update-news-card.component';
import { UpdateNewsItemsComponent } from './components/update-news-items/update-news-items.component';
import { UpdateLabComponent } from './components/update-lab/update-lab.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UpdateNewsCardComponent,
    UpdateNewsItemsComponent,
    UpdateLabComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
