import { Task } from './task';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Category } from 'src/app/category';

@Injectable(
  {providedIn: 'root'}
)
export class InteractionService {

  task!:Task;
  isTaskDetailVisible:boolean = false;
  isCategoryPanelVisible!:boolean;

  category: Category = {
    id: 1,
    name: "My Day",
    iconClass: "fa-solid fa-sun"
  }

  constructor() { }

  public taskDetailButton = new BehaviorSubject<boolean>(this.isTaskDetailVisible);
  taskDetailButton$ = this.taskDetailButton.asObservable();

  selectTaskDetailButton(button: boolean) {
    this.isTaskDetailVisible = button;
    this.taskDetailButton.next(this.isTaskDetailVisible);
  }

  public categoryPanelButton = new BehaviorSubject<boolean>(this.isCategoryPanelVisible);
  categoryPanelButton$ = this.categoryPanelButton.asObservable();

  selectCategoryPanelButton(button: boolean) {
    this.isCategoryPanelVisible = button;
    this.categoryPanelButton.next(this.isCategoryPanelVisible);
  }
  
  public chosenCategory = new BehaviorSubject<Category>(this.category);
  chosenCategory$ = this.chosenCategory.asObservable();

  selectCategory(category:Category) {
    this.chosenCategory.next(category);
  }

  public chosenTask = new BehaviorSubject<Task>(this.task);
  chosenTask$ = this.chosenTask.asObservable();

  selectTask(task: Task) {
    this.chosenTask.next(task);
  }
}
