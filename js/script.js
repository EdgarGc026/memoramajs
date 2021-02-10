class Game {
  constructor() {}

  getRandomNumberPokemon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min)) + min;
  }

  getRandomPokemon() {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(this.getRandomNumberPokemon(1, 20));
    }
    array.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
    console.log(array);
  }
}

let game = new Game();
let show = game.getRandomNumberPokemon(1, 20);
let showinArr = game.getRandomPokemon();
console.log(showinArr);

/* 

let showinArr = game.getRandomPokemon();

console.log(show); */
