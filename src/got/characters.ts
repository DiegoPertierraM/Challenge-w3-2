import { Advisor } from './model/advisor';
import { anyCharacter } from './model/character';
import { Fighter } from './model/fighter';
import { King } from './model/king';
import { Squire } from './model/squire';

// También se podrían crear variables de cada personaje, instanciar las clases y luego meter
// los personajes directamente en el array.
// De esta forma nos evitaríamos el problema de tener que hacer push de los dos últimos
// y de tener que decir characters[1] as Fighter

export const characters: anyCharacter[] = [
  new King('Joffrey', 'Baratheon', 18, 2),
  new Fighter('Jaime', 'Lannister', 35, 'sword', 7),
  new Fighter('Daenerys', 'Targaryen', 25, 'dragon', 10),
];

characters.push(new Advisor('Tyrion', 'Lannister', 30, characters[2]));
characters.push(
  new Squire('Bronn', 'Lannister', 35, characters[1] as Fighter, 7)
);
