import { Category } from 'src/app/category';
import { Task } from 'src/app/task';
import { of } from 'rxjs';
import { ToDoService } from 'src/app/todo.service';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './../task-detail/task-detail.component';
import { TaskComponent } from './../task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailsComponent } from './category-details.component';

describe('CategoryDetailsComponent', () => {
  let component: CategoryDetailsComponent;
  let fixture: ComponentFixture<CategoryDetailsComponent>;
  let toDoServiceSpy = jasmine.createSpyObj(['addTask']);

  let task = {
    id: 1,
    name: "testing task",
    categoryIds: [1,5],
    note: "",
    isCompleted: false,
    isImportant: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoryDetailsComponent,
        TaskComponent,
        TaskDetailComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [{
        provide: ToDoService, useValue: toDoServiceSpy
      },]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task', () => {
    component.taskName = 'testing task';
    component.selectedCategory.id = 1;
    toDoServiceSpy.addTask.and.returnValue(of(task));
    component.addTask();
    expect(task.name).toEqual(component.inputTaskName);
  });

  it('should toggle switch', () => {
    expect(component).toBeTruthy();
  });
});
