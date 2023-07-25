import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MemberComponent } from './components/member/member.component';
import { MembersComponent } from './components/members/members.component';
import { ResearchComponent } from './components/research/research.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginModuleModule } from './modules/login-module/login-module.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'members', component: MembersComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'projects', component: ProjectsComponent},
  {
    path: 'login', 
    loadChildren: ()=>
      import('./modules/login-module/login-module.module').then((m)=>m.LoginModuleModule),
  },
  {
    path: 'admin', 
    canActivate:[AuthGuard],
    loadChildren: ()=>
      import('./modules/admin/admin.module').then((m)=>m.AdminModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
