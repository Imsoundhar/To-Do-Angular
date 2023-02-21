import { SettingsModule } from './../settings/settings.module';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    SettingsModule
  ],
  providers: [],
  exports: [
    TopNavComponent
  ]
})
export class CommonModule { }
