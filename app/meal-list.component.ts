import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealFilterComponent } from './meal-filter.component';
import { MealFilterPipe } from './meal-filter.pipe';
import { CreateMealComponent } from './create-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['myMeals'],
  pipes: [MealFilterPipe],
  directives: [MealComponent, MealFilterComponent, CreateMealComponent],
  template: `
    <meal-filter (currentFilter)="filterReceived($event)"></meal-filter>
    <div class="gallery">
    <meal *ngFor="#meal of myMeals | filter:currentFilter" [currentMeal]="meal"></meal>
    <create-meal (createdMeal)="mealReceived($event)"></create-meal>
    </div>
  `
})

export class MealListComponent {
  currentFilter: string;
  myMeals: Meal[];
  filterReceived(filter: string){
    this.currentFilter = filter;
  }
  mealReceived(meal: Meal){
    this.myMeals.push(meal);
  }
}
