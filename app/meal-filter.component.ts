import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-filter',
  outputs: ['currentFilter'],
  template: `
    <label>Sort by: </label>
    <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All</option>
    <option value="300">Healthy</option>
    <option value="301">Unhealthy</option>
    </select>
  `
})

export class MealFilterComponent {
  currentFilter: EventEmitter<string>;
  constructor(){
    this.currentFilter = new EventEmitter;
  }
  onChange(value: string){
    this.currentFilter.emit(value);
  }
}
