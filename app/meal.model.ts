export class Meal {
  imgUrl= 'http://lorempixel.com/500/200/food/' + Math.floor(Math.random() * 10 + 1);
  constructor(public name: string, public details: string, public calories: number){}
}
