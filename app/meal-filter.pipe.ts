import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'filter', 
  pure: false
})

export class MealFilterPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var currentFilter = parseInt(args[0]);
    if (currentFilter === 300){
      return input.filter((meal) =>{
        return meal.calories <= currentFilter;
      });
    }
    if (currentFilter === 301){
      return input.filter((meal) =>{
        return meal.calories > currentFilter;
      })
    }
    else return input;
  }
}
