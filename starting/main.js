const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
    this.x = 0
    this.y = 0
    this.play = true
  }

  print(){
    for(let i = 0; i < this.field.length; i++){
      console.log(this.field[i].join(""))
    }
  }
  winOrLose(){
    if(this.field[this.y] === undefined || this.field[this.y][this.x] === undefined || this.field[this.y] === 0 || this.field[this.y][this.x] === 0){
      console.log("you are out of the field")
      this.play = false
    }else if(this.field[this.y][this.x] === "^"){
      console.log("You won")
      this.play = false
    }else if(this.field[this.y][this.x] === "O"){
      console.log("You lose")
      this.play = false
    }else{
      this.field[this.y][this.x] = "*"
    }
 
  }

  askUser(){
    const move = prompt("move with 'u,d,l,r'")
    if(move === 'u'){
      this.y -= 1
    }else if(move === 'd'){
      this.y += 1
    }else if(move === 'r'){
      this.x += 1
    }else if(move === 'l'){
      this.x -= 1
    }
    this.winOrLose()
  }



  rungame(){
    while(this.play){
      this.print()
      this.askUser()
    }
  }
}

const myField = new Field([
  ['*', 'O', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░']
]);

myField.rungame()
