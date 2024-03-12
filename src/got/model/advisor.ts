import { Character, anyCharacter } from './character';

export class Advisor extends Character {
  lord: anyCharacter;

  constructor(name: string, house: string, age: number, lord: anyCharacter) {
    super(name, house, age);
    this.lord = lord;
    this.type = 'advisor';
    this.message = 'No sé porqué, pero creo que voy a morir pronto';
  }
}
