import { AuthGuard } from './../auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'settings',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '', component: SettingsComponent,
      },
      {
        path: 'general', component: GeneralComponent
      },
      {
        path: 'profile', component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
