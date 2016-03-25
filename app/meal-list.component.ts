import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealFilterComponent } from './meal-filter.component';
import { MealFilterPipe } from './meal-filter.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['myMeals'],
  pipes: [MealFilterPipe],
  directives: [MealComponent, MealFilterComponent],
  template: `
    <meal-filter (currentFilter)="filterReceived($event)"></meal-filter>
    <meal *ngFor="#meal of myMeals | filter:currentFilter" [currentMeal]="meal"></meal>
  `
})

export class MealListComponent {
  currentFilter: string;
  myMeals: Meal[];
  filterReceived(filter: string){
    this.currentFilter = filter;
  }
}
