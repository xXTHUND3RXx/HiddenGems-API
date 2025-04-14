const gamesArr = [];

class Game {
  constructor(id, name, genre) {
    this.id = id;
    this.name = name;
    this.genre = genre;
  }

  pushGame(arr) {
    arr.push({id: this.id, name: this.name, genre: this.genre});
  }
}

const game1 = new Game(1, "doors", "action");

game1.pushGame(gamesArr);

const game2 = new Game(2, "red", "action");
game2.pushGame(gamesArr);
console.log(gamesArr);
