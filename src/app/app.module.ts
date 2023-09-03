import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ResearchComponent } from './components/research/research.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { FooterComponent } from './components/footer/footer.component';
import { MemberComponent } from './components/member/member.component';
import { MembersComponent } from './components/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResearchComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    MemberComponent,
    MembersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
