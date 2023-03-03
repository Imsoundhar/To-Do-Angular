import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPanelComponent } from './category-panel.component';

describe('CategoryPanelComponent', () => {
    let component: CategoryPanelComponent;
    let fixture: ComponentFixture<CategoryPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CategoryPanelComponent
            ],
            imports: [ 
                HttpClientModule, 
                FormsModule
            ],
            providers: [  ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});