import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1 class="title-heading"> Meal Tracker </h1>
    <div class="container">
    <meal-list [myMeals]='myMeals'></meal-list>
    </div>
  `
})

export class AppComponent {
  myMeals: Meal[] = [];
  constructor(){
    this.populate();
  }
  populate(){
    var totalMeals: number = Math.floor(Math.random() * 10);
    for(var i = 1; i <= totalMeals; i++){
      var name = 'Meal#' + i;
      var description = 'Lorem Ipsum Caloriem ' + i;
      var calories = Math.floor(Math.random() * 500);
      this.myMeals.push(new Meal(name, description, calories));
    }
  }
}
