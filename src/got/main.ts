import './styles.css';
import { characters } from './characters';
import { anyCharacter } from './model/character';
import { King } from './model/king';
import { Fighter } from './model/fighter';
import { Advisor } from './model/advisor';
import { Squire } from './model/squire';

const emojis = {
  king: '👑',
  fighter: '🗡',
  advisor: '🎓',
  squire: '🛡',
};

const selectCharacterData = (character: anyCharacter) => {
  switch (character.type) {
    case 'king':
      return `<li>Años de reinado: ${(character as King).kingdomYears}</li>`;
    case 'fighter':
      return `<li>Arma: ${(character as Fighter).weapon}</li>
    <li>Destreza: ${(character as Fighter).skillRange}</li>`;
    case 'advisor':
      return `<li>Asesora a: ${(character as Advisor).lord.name}</li>`;
    case 'squire':
      return `<li>Sirve a: ${(character as Squire).master.name}</li>
      <li>Peloteo: ${(character as Squire).servitude}</li>`;
    default:
      return '';
  }
};

const makeItem = (item: anyCharacter, i: number) => `
<li class="character col">
          <div class="card character__card">
            <img
              src="img/${item.name.toLowerCase()}.jpg"
              alt="Foto de ${item.name} ${item.house}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">
              ${item.name} ${item.house}
              </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${item.age} años</li>
                  <li>
                    Estado: ${
                      item.isAlive
                        ? '<i class="fas fa-thumbs-up"></i>'
                        : '<i class="fas fa-thumbs-down"></i>'
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${selectCharacterData(item)}
                </ul>
                <div class="character__actions">
                  <button data-id="${i}" class="character__action btn talk">habla</button>
                  <button class="character__action btn kill">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji">
            ${emojis[item.type as keyof typeof emojis]}
            </i>
          </div>
        </li>
`;

const renderApp = () => {
  const lisArray = characters.map(makeItem);
  return `
  <div class="app container">
      <ul class="characters-list row list-unstyled">
        ${lisArray.join()}
      </ul>
  </div>s
`;
};

const communications = (id: number) => {
  const character = characters[id];
  const template = `
  <div class="comunications on">
    <p class="comunications__text display-1">${character.talk()}</p>
    <img
      class="comunications__picture"
      src="img/${character.name.toLowerCase()}.jpg"
      alt="Foto de ${character.name} ${character.house}"
    />
  </div>
`;
  document.body.innerHTML += template;
  setTimeout(() => {
    document.querySelector('.comunications')?.remove();
  }, 2000);
};

const onKill = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  const id = Number(element.dataset.id as string);
  characters[id].isAlive = false;
  console.log(characters);
  main();
};

const onTalk = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  const id = Number(element.dataset.id as string);
  communications(id);
};

const main = () => {
  document.body.innerHTML = renderApp();
  const killButtons = document.querySelectorAll('.kill');
  const talkButtons = document.querySelectorAll('.talk');
  killButtons.forEach((button) => {
    button.addEventListener('click', onKill);
  });

  talkButtons.forEach((button) => {
    button.addEventListener('click', onTalk);
  });
};

main();
