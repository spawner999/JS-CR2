import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { CreateMealComponent } from './create-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['dailyMeals', 'currentDate', 'dailyCalories'],
  outputs: ['createdMeal'],
  directives: [MealComponent, CreateMealComponent],
  template: `
    <h1>{{currentDate.format('MMM Do YY')}}</h1>
    <h2>Calories Consumed: {{dailyCalories}}</h2>
    <div class="gallery">
    <meal *ngFor="#meal of dailyMeals" [currentMeal]="meal"></meal>
    <create-meal *ngIf="currentDate.format()===actualDate" (createdMeal)="mealReceived($event)"></create-meal>
    </div>
  `
})

export class MealListComponent {
  currentDate;
  actualDate;
  dailyCalories: number;
  createdMeal: EventEmitter<Meal>;
  dailyMeals: Meal[];
  constructor(){
    this.actualDate = moment().format();
    this.createdMeal = new EventEmitter();
  }
  mealReceived(meal: Meal){
    this.createdMeal.emit(meal);
  }
}
