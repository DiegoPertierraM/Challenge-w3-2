/* eslint-disable max-params */
import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  master: Fighter;
  servitude: number;

  constructor(
    name: string,
    house: string,
    age: number,
    master: Fighter,
    servitude: number
  ) {
    super(name, house, age);

    this.master = master;
    this.servitude = servitude;
    this.type = 'squire';
    this.message = 'Soy un loser';
  }
}
