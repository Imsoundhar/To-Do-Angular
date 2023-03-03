import { AuthGuard } from './auth.guard';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { LogInComponent } from './log-in/log-in.component';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'todo', component: TopNavComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SettingsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
