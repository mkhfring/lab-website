import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MemberComponent } from './components/member/member.component';
import { MembersComponent } from './components/members/members.component';
import { ResearchComponent } from './components/research/research.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginModuleModule } from './modules/login-module/login-module.module';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'members', component: MembersComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'projects', component: ProjectsComponent},
  {
    path: 'login', 
    loadChildren: ()=>
      import('./modules/login-module/login-module.module').then((m)=>LoginModuleModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
