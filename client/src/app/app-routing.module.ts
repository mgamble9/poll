import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';
import { CreatepollComponent } from './createpoll/createpoll.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreatepollComponent },
  { path: 'login', component: LandingComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '#poll/:poll_id', component:  PollComponent }

  // { path: '', pathMatch: "full", redirectTo: "/login"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
