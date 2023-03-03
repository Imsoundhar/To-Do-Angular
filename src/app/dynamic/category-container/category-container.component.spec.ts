import { ToDoService } from 'src/app/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryContainerComponent } from './category-container.component';
import { of } from 'rxjs';

describe('CategoryContainerComponent', () => {
  let component: CategoryContainerComponent;
  let fixture: ComponentFixture<CategoryContainerComponent>;

  beforeEach(async () => {
    const toDoServiceSpy = jasmine.createSpyObj<ToDoService>(["getCategories"]);
    toDoServiceSpy.getCategories.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [
        CategoryContainerComponent
      ],
      imports: [
        HttpClientModule
      ],
      // providers: [ { provide: ToDoService, useValue: jasmine.createSpyObj(['']) } ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
