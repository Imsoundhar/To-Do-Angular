import { GeneralComponent } from './general/general.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    SettingsComponent,
    GeneralComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, FormsModule, SettingsRoutingModule],
  providers: [],
  exports: [
    SettingsComponent,
    GeneralComponent,
    ProfileComponent
  ],
})
export class SettingsModule { }
