import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'global-stats',
  inputs: ['totalCalories', 'totalAvg', 'dailyAvg'],
  template: `
  <h1 class="title-heading"> Meal Tracker </h1>
  <h2> All Time Calories: {{totalCalories}}</h2>
  <h2> Meal Avg: {{totalAvg}}</h2>
  <h2> Daily Avg: {{dailyAvg}}</h2>
  `
})

export class GlobalStatsComponent {
  totalCalories: number;
  totalAvg: number;
  dailyAvg: number;
}
