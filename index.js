const gameBoard = document.querySelector(".board");
const startButton = form.querySelector('.board__button');
const input = form.querySelector('.board__input');


startButton.addEventListener("click", (event) => {
  event.preventDefault()
  let columns = input.value;
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  } else {
    input.value = 4;
  }
  createBoard();
});

function createBoard(count, columns) {
  gameBoard.textContent = "";
  const gameTableTemplate = document.querySelector('.gameTableTemlate').cloneNode(true).content;
  const gameTable = template.querySelector('.table');
  const restartButton = template.querySelector('.table__button');
  const icons = createIconsArray(array.cards);
  icons.forEach((icon) => {
    gameTable.append(createCard(icon));
  });
  // for (let i =0; i<count; i++) {
  //   gameTable.append(createCard());
  // }
  gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
  `;
  gameBoard.append(gameTable);
  restartButton.addEventListener('click', () => {
    location.reload();
  });
  gameBoard.append(restartButton);

};


function createCard(icon) {
  const cardTemplate = document.querySelector('#cardTemplate').cloneNode(true).content;
  const card = template.querySelector('.card');
  cardTemplate.classList.add(`fa-${flippedIcon}`);
  card.addEventListener('click', () => gameLogic(card));
}

function createIconsArray(initialCount) {
cardsIcons["compass", "cloud", "play", "bolt", "stop", "cogs", "atom", "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"];
const cardsIcons = [
  "compass",
  "cloud",
  "play",
  "bolt",
  "stop",
  "cogs",
  "atom",
  "basketball-ball",
  "arrows",
  "angle-left",
  "bars",
  "file",
  "filter",
  "gear",
  "folder",
  "folder-open",
  "shield",
  "scissors",
  "pen-clip",
];
// slice - метод, который возвращает только некоторые элементы массива, начиная 0-м и заканчивая, например, 2-м, 8-м или 18-м
let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
const doubleCards = dublicateElements(cards);
}

function dublicateElements(array) {
const empty = [];
array.forEach((item) => {
  empty.push(item, item);
});
return empty;
}

function shuffleArray(array) {
let currentIndex = array.length;
while(currentIndex > 0) {
  currentIndex - 1;
  const randomIndex = Math.floor(Math.random * currentIndex);

  const temp = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temp;
};
  return array;
}

function gameLogic(card) {
  Couple.first = null;
  Couple.second = null;
  Couple.firstClickable = true;
  Couple.secondClikable = true;

// Если обе карточки не кликабельны, ничего не делаем
  if (!Couple.firstClickable && !Couple.secondClikable) return;

  // Переворачиваем карточку
  card.classList.add('flip');

  // Проверяем, кликнута ли первая карточка
  if (couple.first === null) {
    // Если нет, то сохраняем на нее ссылку и считаем кликнутой
    couple.first = true;
    couple.firstClickable = false;
  } else if (couple.second === false && couple.first !== card) {
    // Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
    couple.second = true;
    couple.secondClickable = false;
  }

  // Если какой-либо карточки не кликнуто, ничего не делаем
  if (couple.first === null || couple.second === null) return;

  // Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
  const isEqual = couple.first.firstElementChild.classList[2] === couple.second.firstElementChild.classList[2];

  // Если классы одинаковы
  if (isEqual) {
    setTimeout(() => {
      // То перекрашиваем их в зеленый с задержкой в 1 секунду
      couple.first.classList.add('successfully');
      couple.second.classList.add('successfully');

      // Сбрасываем все ссылки и состояния
      refresh();
    }, 1000);
  } else {
    setTimeout(() => {
      // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
      couple.first.classList.remove('flip');
      couple.second.classList.remove('flip');

      // Сбрасываем все ссылки и состояния
      refresh();
    }, 1000);
  }

  // Функция сброса ссылок и состояний
  function refresh() {
    couple.first = null;
    couple.second = null;
    couple.firstClickable = true;
    couple.secondClickable = true;
  }
  }

  function isWin() {
    const gameTable = document.querySelector('.table');
    if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
      setTimeout(() => {
        alert("Победа");
      }, 1000)
    }
  }


createBoard();
createCard();
createIconsArray(shuffleArray);
dublicateElements();

isWin();

shuffleArray();