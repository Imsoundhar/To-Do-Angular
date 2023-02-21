import { InteractionService } from 'src/app/interaction.service';
import { Task } from './../../task';
import { Component, Input } from '@angular/core';
import { Category } from 'src/app/category';
import { ToDoService } from 'src/app/todo.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {

  @Input() selectedTask!: Task;
  selectedCategory!: Category;
  isVisible: boolean = false;
  userNotes!:string;
  taskName!:string;

  constructor(private interactionService: InteractionService,
    private toDoService: ToDoService) { }

  ngOnInit() {
    this.openTaskDetail();
    this.getSelectedTask();
    this.getSelectedCategory();
  }

  openTaskDetail() {
    this.interactionService.taskDetailButton$.subscribe(button => {
      this.isVisible = button;
    });
  }

  getSelectedCategory() {
    this.interactionService.chosenCategory$.subscribe( chosenCategory => {
      this.selectedCategory = chosenCategory;
    });
  }

  getSelectedTask() {
    this.interactionService.chosenTask$.subscribe(task => {
      this.selectedTask = task;
      this.taskName = this.selectedTask.name;
      this.userNotes = this.selectedTask.note;
    })
  }

  closeTaskDetail() {
    this.isVisible = !this.isVisible;
    this.interactionService.selectTaskDetailButton(this.isVisible);
  }

  updateTask() {
    this.selectedTask.note = this.userNotes;
    this.selectedTask.name = this.taskName;
    this.toDoService.addTask(this.selectedTask, "task");
  }

  markAsCompleted(task: Task) {
    task.isCompleted = !task.isCompleted;
    this.toDoService.addTask(task, "task");
    this.interactionService.selectCategory(this.selectedCategory);
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
    this.interactionService.selectTask(task);
    this.interactionService.selectCategory(this.selectedCategory);
  }

  addTaskToImportantCategory(task: Task) {
    for (let i = 0; i < task.categoryIds.length; i++) {
      if (task.categoryIds[i] == 2) {
        task.categoryIds.splice(i, 1);
      }
    }
  }
}
