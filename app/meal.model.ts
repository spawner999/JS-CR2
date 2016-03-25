/// <reference path=".././typings/moment/moment.d.ts"/>

export class Meal {
  imgUrl: string;
  day;
  constructor(public name: string, public details: string, public calories: number){
    var random: number = Math.floor(Math.random() * 10 + 1);
    this.imgUrl = 'http://lorempixel.com/500/200/food/' + random;
    this.day = moment();
  }
}
