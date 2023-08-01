import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateNewsItemsComponent } from './components/update-news-items/update-news-items.component';
import { UpdateNewsCardComponent } from './components/update-news-card/update-news-card.component';
import { UpdateLabComponent } from './components/update-lab/update-lab.component';
import { EditNewsItemComponent } from './components/edit-news-item/edit-news-item.component';
import { AddNewsItemsComponent } from './components/add-news-items/add-news-items.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'updateNewsItems', component:UpdateNewsItemsComponent},
      {path: 'updateNewsCard', component:UpdateNewsCardComponent},
      {path: 'updateLab', component:UpdateLabComponent},
      {path: 'editNews', component:EditNewsItemComponent},
      {path: 'addNews', component:AddNewsItemsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
