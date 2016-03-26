import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { MealFilterComponent } from './meal-filter.component';
import { DayFilterPipe } from './day-filter.pipe';
import { MealFilterPipe } from './meal-filter.pipe';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent, MealFilterComponent],
  pipes: [DayFilterPipe, MealFilterPipe],
  template: `
    <div class="wrapper">
      <div class="header">
      <h1 class="title-heading"> Meal Tracker </h1>
      <h2> All Time Calories: {{totalCalories}}</h2>
      <h2> Meal Avg: {{totalAvg}}</h2>
      <h2> Daily Avg: {{dailyAvg}}</h2>
      <meal-filter (currentFilter)="filterReceived($event)"></meal-filter>
      </div>
      <div class="container">
      <meal-list *ngFor="#date of dates" [dailyCalories]="updateDateTotal(myMeals | day:date)" [currentDate]="date" [dailyMeals]="myMeals | day:date | filter:currentFilter" (createdMeal)="mealReceived($event)"></meal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  currentFilter: string;
  myMeals: Meal[] = [];
  dates = [];
  totalCalories: number = 0;
  totalAvg: number = 0;
  dailyAvg: number = 0;
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
    this.updateCalories();
    this.updateMealAvg();
    this.updateDailyAvg();
  }
  updateCalories(){
    this.totalCalories = 0;
    for(var meal of this.myMeals){
      this.totalCalories += meal.calories;
    }
  }
  updateMealAvg(){
    this.totalAvg = 0;
    this.totalAvg = Math.floor(this.totalCalories / this.myMeals.length);
  }
  updateDailyAvg(){
    this.dailyAvg = 0;
    this.dailyAvg = Math.floor(this.totalCalories / this.dates.length);
  }
  updateDateTotal(meals: Meal[]){
    var total: number = 0;
    for(var meal of meals){
      total += meal.calories;
      console.log(total);
    }
    return total;
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
    this.updateCalories();
    this.updateMealAvg();
    this.updateDailyAvg();
  }
  filterReceived(filter: string){
    this.currentFilter = filter;
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
