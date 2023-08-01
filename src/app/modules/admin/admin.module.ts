import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateNewsCardComponent } from './components/update-news-card/update-news-card.component';
import { UpdateNewsItemsComponent } from './components/update-news-items/update-news-items.component';
import { UpdateLabComponent } from './components/update-lab/update-lab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditNewsItemComponent } from './components/edit-news-item/edit-news-item.component';
import { AddNewsItemsComponent } from './components/add-news-items/add-news-items.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UpdateNewsCardComponent,
    UpdateNewsItemsComponent,
    UpdateLabComponent,
    EditNewsItemComponent,
    AddNewsItemsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
