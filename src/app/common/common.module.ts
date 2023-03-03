import { DynamicModule } from './../dynamic/dynamic.module';
import { SettingsModule } from './../settings/settings.module';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    SettingsModule,
    DynamicModule,
  ],
  providers: [],
  exports: [
    TopNavComponent
  ]
})
export class CommonModule { }
