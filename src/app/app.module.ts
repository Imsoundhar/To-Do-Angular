import { AuthGuard } from './auth.guard';
import { SettingsModule } from './settings/settings.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    CommonModule,
    DynamicModule,
    SettingsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
