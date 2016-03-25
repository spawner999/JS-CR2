import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealFilterComponent } from './meal-filter.component';
import { CreateMealComponent } from './create-meal.component';

// <meal-filter (currentFilter)="filterReceived($event)"></meal-filter>
@Component({
  selector: 'meal-list',
  inputs: ['myMeals', 'currentDate'],
  outputs: ['createdMeal'],
  directives: [MealComponent, MealFilterComponent, CreateMealComponent],
  template: `
    <h1>{{currentDate}}</h1>
    <div class="gallery">
    <meal *ngFor="#meal of myMeals" [currentMeal]="meal"></meal>
    <create-meal *ngIf="currentDate===actualDate" (createdMeal)="mealReceived($event)"></create-meal>
    </div>
  `
})

export class MealListComponent {
  currentFilter: string;
  currentDate: string;
  actualDate: string;
  createdMeal: EventEmitter<Meal>;
  myMeals: Meal[];
  constructor(){
    this.actualDate = moment().format('MMM Do YY');
    this.createdMeal = new EventEmitter();
  }
  filterReceived(filter: string){
    this.currentFilter = filter;
  }
  mealReceived(meal: Meal){
    this.createdMeal.emit(meal);
  }
}
