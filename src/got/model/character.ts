import { Advisor } from './advisor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export type anyCharacter = King | Fighter | Advisor | Squire;
type CharacterType = 'king' | 'fighter' | 'advisor' | 'squire';

export abstract class Character {
  static show = 'Juego de Tronos';

  /* Debería ser private */ name: string;
  /* Debería ser private */ house: string;
  /* Debería ser private */ age: number;
  isAlive = true;
  /* Debería ser protected */ type: CharacterType | '' = '';
  /* Debería ser protected */ message = '';
  // Se les puede asignar el valor directamente aquí, e infieren el tipo
  // O se pueden definir como boolean y string, y asignarles el valor en el constructor con this.

  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
  }

  kill() {
    this.isAlive = false;
  }

  talk() {
    return this.message;
  }
}
