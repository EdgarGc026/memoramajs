class Game {
  constructor() {}

  //Creamos un metodo donde se generen los numeros aleatoreamente
  getRandomNumberPokemon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min)) + min;
  }

  //Este método se encarga de ordernar los numeros de menor a mayor
  orderNumberElements(array) {
    return array.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber
    );
  }

  //Este metodo llama la funcion para generar los numeros de manera aleatoria
  //Estos numeros seran guardados en un arreglo ordenado donde se verificaran
  //que no esten repetidos. En caso de estar repetidos, sera sustituido por otro
  //numero.
  getRandomPokemon() {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(this.getRandomNumberPokemon(1, 20));
    }
    this.orderNumberElements(array);
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
