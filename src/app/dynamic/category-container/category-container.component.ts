import { Component, Input} from "@angular/core";
import { ToDoService } from "src/app/todo.service";
import { InteractionService } from "src/app/interaction.service";
import { Category } from 'src/app/category';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent {

  categories: Category[] = [];
  constructor(private toDoService: ToDoService, private interactionService: InteractionService) { }
  @Input() categoryTitle!: string;
  selectedCategory!: Category;

  selectCategory(data: Category): void {
    let category = {
      id: data.id,
      name: data.name,
      iconClass: data.iconClass,
    };
    this.interactionService.selectCategory(category);
  }

  ngOnChanges() {
    this.toDoService.getCategories().subscribe(response => {
      this.categories = response as Category[];
      if (this.categories.length <= 5) {
        this.interactionService.selectCategory(this.categories[0]);
      } else {
        this.interactionService.selectCategory(this.categories[this.categories.length - 1]);
      }
    });
    this.interactionService.chosenCategory$.subscribe( selectedCategory => {
      this.selectedCategory = selectedCategory;
    });
  }  
}
