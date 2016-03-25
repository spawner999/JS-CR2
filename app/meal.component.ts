import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  template: `
    <h2 (click)="selectMeal()">{{ currentMeal.name }}</h2>
    <div class="meal__info" *ngIf="isSelected">
      <h3>Description: {{ currentMeal.details }}</h3>
      <h3>Calories: {{ currentMeal.calories }}</h3>
    </div>
  `
})

export class MealComponent {
  currentMeal: Meal;
  isSelected: boolean = false;
  selectMeal(){
    this.isSelected = !this.isSelected;
  }
}
