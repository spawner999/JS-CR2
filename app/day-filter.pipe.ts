import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'day',
  pure: false
})

export class DayFilterPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var currentFilter = args[0];
      return input.filter((meal) =>{
        return meal.day.format('MMM Do YY') === currentFilter.format('MMM Do YY');
      });
    }
}
