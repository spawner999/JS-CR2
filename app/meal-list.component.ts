import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['myMeals'],
  directives: [MealComponent],
  template: `
    <meal *ngFor="#meal of myMeals" [currentMeal]="meal"></meal>
  `
})

export class MealListComponent {
  myMeals: Meal[];
}
