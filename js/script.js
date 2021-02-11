class Game {
  constructor() {}

  //Creamos un metodo donde se generen los numeros aleatoreamente
  getRandomNumbers(min, max) {
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
  addNumbersToArray() {
    const array = [];
    const size = 10;

    while (array.length < size) {
      let numbers = this.getRandomNumbers(1, 20);
      if (!array.includes(numbers)) {
        array.push(numbers);
        this.orderNumberElements(array);
      }
    }
    console.log(array);
  }
}
// this.orderNumberElements(array);

let game = new Game();
let rand = game.getRandomNumbers(1, 20);
let addNumber = game.addNumbersToArray();
