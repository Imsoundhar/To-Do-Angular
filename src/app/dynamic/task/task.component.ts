import { Category } from './../../category';
import { InteractionService } from 'src/app/interaction.service';
import { ToDoService } from '../../todo.service';
import { Component, Input, OnChanges } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnChanges {

  @Input() inputTask!: string;
  tasks: Task[] = [];
  selectedTask!: Task;
  selectedCategory!: Category;
  completedCount: number = 0;

  constructor(private toDoService: ToDoService,
    private interactionService: InteractionService) { }

  ngOnChanges() {
    this.selectCategory();
  }

  ngOnInit() {
    this.selectCategory();
  }

  selectTask(task: Task) {
    this.interactionService.selectTaskDetailButton(true);
    this.interactionService.selectTask(task);
  }

  selectCategory() {
    this.interactionService.chosenCategory$.subscribe(chosenCategory => {
      this.selectedCategory = chosenCategory;
      this.getTasks();
    });
  }

  getTasks() {
    this.toDoService.getTasksByCategoryId(this.selectedCategory.id).subscribe((task) => {
      this.tasks = task as Task[];
      this.completedCount = 0;
      for (let task of this.tasks) {
        if (task.isCompleted == true) {
          this.completedCount++;
        }
      }
    });
  }

  markAsCompleted(task: Task) {
    task.isCompleted = !task.isCompleted;
    this.toDoService.addTask(task, "task");
    this.getTasks();
    this.interactionService.selectTask(task);
  }

  markAsImportant(task: Task) {
    if (task.isImportant) {
      task.isImportant = false;
      this.addTaskToImportantCategory(task);
    } else {
      task.isImportant = true;
      task.categoryIds.splice(0, 0, 2);
    }
    this.toDoService.addTask(task, "task");
    this.getTasks();
    this.interactionService.selectTask(task);
  }

  addTaskToImportantCategory(task: Task) {
    for (let i = 0; i < task.categoryIds.length; i++) {
      if (task.categoryIds[i] == 2) {
        task.categoryIds.splice(i, 1);
      }
    }
  }
}