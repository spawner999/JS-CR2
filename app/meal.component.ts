import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  directives: [EditMealComponent],
  template: `
    <div class="meal">
      <div [class.flipped]="editMode" class="card">
        <div class="face front">
          <h2 (click)="selectMeal()">{{ currentMeal.name }}</h2>
          <div class="meal__info" *ngIf="isSelected">
            <h3>Description: {{ currentMeal.details }}</h3>
            <h3>Calories: {{ currentMeal.calories }}</h3>
            <button (click)="editToggle('true')">Edit</button>
          </div>
        </div>
        <edit-meal [currentMeal]="currentMeal" (commitChanges)="editToggle(false, $event)" class="face back"></edit-meal>
      </div>
    </div>
  `
})

export class MealComponent {
  editMode: boolean = false;
  currentMeal: Meal;
  isSelected: boolean = false;
  selectMeal(){
    this.isSelected = !this.isSelected;
  }
  editToggle(value: boolean, update?){
    this.editMode = value;
    if (update){
      this.currentMeal.name = update[0];
      this.currentMeal.details = update[1];
      this.currentMeal.calories = update[2];
    }
  }
}
