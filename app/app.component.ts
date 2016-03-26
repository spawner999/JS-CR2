import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { DayFilterPipe } from './day-filter.pipe';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  pipes: [DayFilterPipe],
  template: `
  <h1 class="title-heading"> Meal Tracker </h1>
    <div class="wrapper">
      <div class="container">
      <meal-list *ngFor="#date of dates" [currentDate]="date" [myMeals]="myMeals | day:date" (createdMeal)="mealReceived($event)"></meal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  myMeals: Meal[] = [];
  dates = [];
  constructor(){
    this.populate();
  }
  populate(){
    var totalMeals: number = Math.floor(Math.random() * 30) + 10;
    for(var i = 1; i <= totalMeals; i++){
      var name = 'Meal#' + i;
      var description = 'Lorem Ipsum#' + i;
      var calories = Math.floor(Math.random() * 500);
      var newMeal = new Meal(name, description, calories);
      var random: number = Math.floor(Math.random() * 10 + 1);
      newMeal.day = newMeal.day.subtract(random, 'day');
      this.myMeals.push(newMeal);
    }
    this.getDates();
  }
  getDates(){
    this.dates.push(moment());
    for(var meal of this.myMeals){
      var array = this.dates.map(function(date) { return date.format() });
      var currentDate = meal.day;
      if(array.indexOf(currentDate.format()) === -1){
        this.dates.push(currentDate);
      }
    }
    this.dates.sort(compareDate);
  }
  mealReceived(meal: Meal){
    this.myMeals.push(meal);
    console.log(meal);
    console.log(this.myMeals);
  }
}

  function compareDate(a, b) {
  if (a.isBefore(b)) {
    return 1;
  }
  if (a.isAfter(b)) {
    return -1;
  }
}
