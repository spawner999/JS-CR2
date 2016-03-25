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
  dates: string[] = [];
  constructor(){
    this.populate();
  }
  populate(){
    var totalMeals: number = Math.floor(Math.random() * 10) + 1;
    for(var i = 1; i <= totalMeals; i++){
      var name = 'Meal#' + i;
      var description = 'Lorem Ipsum#' + i;
      var calories = Math.floor(Math.random() * 500);
      var newMeal = new Meal(name, description, calories);
      var random: number = Math.floor(Math.random() * 10 + 1);
      newMeal.day = newMeal.day.subtract(random, 'day');
      console.log(newMeal.day);
      this.myMeals.push(newMeal);
      console.log(this.myMeals);
    }
    this.getDates();
  }
  getDates(){
    this.dates.push(moment().format('MMM Do YY'));
    for(var meal of this.myMeals){
      var currentDate = meal.day.format('MMM Do YY');
      if(this.dates.indexOf(currentDate)=== -1){
        this.dates.push(currentDate);
      }
    }
  }
  mealReceived(meal: Meal){
    this.myMeals.push(meal);
  }
}
