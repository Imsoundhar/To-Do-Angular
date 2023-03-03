import { InteractionService } from 'src/app/interaction.service';
import { ToDoService } from '../../todo.service';
import { Component } from '@angular/core';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent {

  constructor(private toDoService: ToDoService,
    private interactionService: InteractionService) { }

  categories: Category[] = [];
  userDefinedCategory !: string;
  categoryTitle !: string;
  selectedCategory !: Category;
  isTaskDetailVisible !: boolean;
  isCategoryPanelVisible: boolean = false;

  ngOnInit() {
    this.toggleSwitch();
    this.interactionService.categoryPanelButton$.subscribe(categoryPanelButton => {
      this.isCategoryPanelVisible = categoryPanelButton;
    });
  }

  addCategory() {
    if (this.userDefinedCategory != "") {
      this.categoryTitle = this.userDefinedCategory;
      let newUserDefinedCategory = {
        id: 0,
        name: this.categoryTitle,
        iconClass: "fa-solid fa-list",
      };
      this.toDoService.addCategory(newUserDefinedCategory, "category");
      this.userDefinedCategory = "";
    }
  }

  toggleSwitch() {
    if (this.isCategoryPanelVisible) {
      this.isCategoryPanelVisible = !this.isCategoryPanelVisible;
    } else {
      this.isCategoryPanelVisible = !this.isCategoryPanelVisible;
    }
    this.interactionService.selectCategoryPanelButton(this.isCategoryPanelVisible);
  }
}