import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MemberComponent } from './components/member/member.component';
import { MembersComponent } from './components/members/members.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'members', component: MembersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
