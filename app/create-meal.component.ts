import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'create-meal',
  directives: [EditMealComponent],
  outputs: ['createdMeal'],
  template: `
    <div class="meal">
      <div [class.flipped]="editMode" class="card">
        <div class="face front">
          <h2 (click)="editToggle('true')">ADD NEW MEAL +</h2>
        </div>
        <edit-meal [currentMeal]="templateMeal" (commitChanges)="editToggle(false, $event)" class="face back"></edit-meal>
      </div>
    </div>
  `
})

export class CreateMealComponent {
  templateMeal: Meal;
  editMode: boolean = false;
  createdMeal: EventEmitter<Meal>;
  constructor(){
    this.createdMeal = new EventEmitter();
    this.templateMeal = new Meal('Name', 'I liked it', 0);
  }
  sendMeal(meal: Meal){
    this.createdMeal.emit(meal);
  }
  editToggle(value: boolean, update?){
    this.editMode = value;
    if (update){
      var newMeal: Meal = new Meal (update[0], update[1], parseInt(update[2]));
      this.sendMeal(newMeal);
    }
  }
}
