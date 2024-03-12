/* eslint-disable max-params */
import { Character } from './character';

export class Fighter extends Character {
  weapon: string;
  skillRange: number;

  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skillRange: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skillRange = skillRange;
    this.type = 'fighter';
    this.message = 'Primero pego y luego pregunto';
  }
}
