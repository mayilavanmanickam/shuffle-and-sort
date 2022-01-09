const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cardsContainer = document.getElementById("cards");

// add cards to its container
const addCards = (items) => {
  cardsContainer.innerHTML = items
    .map((item) => `<li data-item="${item}">${item}</li>`)
    .join("");
};

// shuffle the cards
const shuffleCards = () => {
  let shuffledCards = [...cards].sort(() => 0.5 - Math.random());

  cardsContainer.innerHTML = null;
  addCards(shuffledCards);
};

// sort the cards
const sortCards = () => {
  let sortedCards = [...cards].sort((a, b) => a - b);

  cardsContainer.innerHTML = null;
  addCards(sortedCards);
};

// onload
addCards(cards);

//another way to shuffle cards (ES5)
const shuffle1 = () => {
  const items = [...cards],
    len = items.length;

  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);

    let temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  addCards(items);
};

// another way to shuffle cards (ES6)
const shuffle2 = () => {
  const items = [...cards],
    len = items.length;

  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);

    [items[i], items[j]] = [items[j], items[i]];
  }

  addCards(items);
};
