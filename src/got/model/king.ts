import { Character } from './character';

export class King extends Character {
  kingdomYears: number;

  constructor(name: string, house: string, age: number, kingdomYears: number) {
    super(name, house, age);
    // Con super, el hijo llama a la clase padre para pasarle los parámetros para que los use
    // para inicializar las propiedades de la clase padre.
    this.kingdomYears = kingdomYears;
    this.type = 'king';
    this.message = 'Vais a morir todos';
    // El padre no puede usar propiedades del hijo, pero al revés sí
    // Por eso se ha de definir message en el padre, aunque luego el hijo la modifique.
  }
}
