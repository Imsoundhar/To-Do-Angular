import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CompletedTaskDirective } from './completed-task.directive';

@NgModule({
  declarations: [
    CategoryPanelComponent,
    CategoryDetailsComponent,
    CategoryContainerComponent,
    TaskComponent,
    TaskDetailComponent,
    CompletedTaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    CategoryPanelComponent,
    CategoryDetailsComponent,
    CategoryContainerComponent,
    TaskComponent,
    TaskDetailComponent
  ],
})
export class DynamicModule { }
