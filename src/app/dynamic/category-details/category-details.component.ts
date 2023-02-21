import { ToDoService } from '../../todo.service';
import { InteractionService } from '../../interaction.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import * as moment from 'moment';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  taskName!: string;
  inputTaskName!: string;
  selectedCategory!: Category;
  container: string = "center-right-container";
  date = moment().format('dddd, MMMM DD');
  isTaskDetailVisible!: boolean;
  isCategoryPanelVisible!: boolean;
  today:number = Date.now();

  constructor(private interactionService: InteractionService,
    private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.interactionService.chosenCategory$.subscribe(chosenCategory => {
      this.selectedCategory = {
        id: chosenCategory.id,
        name: chosenCategory.name,
        iconClass: chosenCategory.iconClass
      }
    })
    this.getContainerDetails();
  }

  getContainerDetails() {
    this.interactionService.taskDetailButton$.subscribe(taskDetailButton => {
      this.isTaskDetailVisible = taskDetailButton;
      this.chooseContainer();
    });
    this.interactionService.categoryPanelButton$.subscribe(categoryPanelButton => {
      this.isCategoryPanelVisible = categoryPanelButton;
      this.chooseContainer();
    });
  }

  chooseContainer() {
    if (this.isTaskDetailVisible == true && this.isCategoryPanelVisible == true) {
      this.container = "center-container";
    } else if (this.isTaskDetailVisible == false && this.isCategoryPanelVisible == false) {
      this.container = "center-full-container";
    } else if (this.isTaskDetailVisible == true && this.isCategoryPanelVisible == false) {
      this.container = "center-left-container";
    } else if (this.isTaskDetailVisible == false && this.isCategoryPanelVisible == true) {
      this.container = "center-right-container";
    }
  }

  addTask() {
    let categoryIds = [];
    categoryIds.push(this.selectedCategory.id);
    if (this.selectedCategory.id < 5) {
      categoryIds.splice(0, 0, 5);
    }
    let importantStatus;
    if (this.selectedCategory.id == 2) {
      importantStatus = true;
    } else {
      importantStatus = false;
    }
    let task = {
      id: 0,
      name: this.taskName,
      categoryIds: categoryIds,
      note: "",
      isCompleted: false,
      isImportant: importantStatus
    };
    this.toDoService.addTask(task, "task");
    this.inputTaskName = this.taskName;
    this.taskName = "";
  }

  toggleSwitch() {
    if ((this.isTaskDetailVisible == false && this.isCategoryPanelVisible == false) || (this.isTaskDetailVisible == true && this.isCategoryPanelVisible == false)) {
      this.interactionService.selectCategoryPanelButton(true);
    }
  }
}
