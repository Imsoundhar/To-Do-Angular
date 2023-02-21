import { SettingsRoutingModule } from './settings/settings-routing.module';
import { CategoryPanelComponent } from './dynamic/category-panel/category-panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'todo', component: CategoryPanelComponent },
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SettingsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
