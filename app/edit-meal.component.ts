import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


//NGMODEL does not work with absolutely postitioned element, since they are outside of the ngzone angular
// is keeeping track of. Must update values manually
@Component({
  selector: 'edit-meal',
  inputs: ['currentMeal'],
  outputs: ['commitChanges'],
  template: `
    <h2>Name: <input type="text" value="{{currentMeal.name}}" #name/></h2>
    <h3>Description: <input type="text" value="{{currentMeal.details}}" #desc/></h3>
    <h3>Calories : <input type="number" value="{{currentMeal.calories}}" #cal/></h3>
    <button (click)="editToggle(false, name.value, desc.value, cal.value)">Confirm</button>
  `
})

export class EditMealComponent {
  currentMeal: Meal;
  commitChanges: EventEmitter<String[]>;
  constructor(){
    this.commitChanges = new EventEmitter();
  }
  editToggle(value: boolean, name: string, desc: string, cal: string){
     var changes: String[] = [];
     changes.push(name, desc, cal.toString());
    this.commitChanges.emit(changes);
  }
}
