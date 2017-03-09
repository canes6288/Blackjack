// var tenValue = 10;
// var jack = tenValue;
// var queen = tenValue;
// var king = tenValue;
// var faceCards = [jack, queen, king];



// var tenVal = [10];
// var singleValue = [2, 3, 4, 5, 6, 7, 8, 9];
// var aceValue = [1, 11];

// var cardValue = singleValue.concat(tenVal, aceValue, faceCards);

// console.log(cardValues);


var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var suits = ['Diamonds','Clubs','Hearts','Spades'];

function card(name, face, suit, value) {
  this.name = name;
  this.face = face;
  this.suit = suit;
  this.value = value;
}


var deck = [];

function shuffleDeck() {
  deck = [];
  
  for(var i = 0; i<faces.length; i++) {
    for(var j = 0; j<suits.length; j++) {
      var temp;
      if(i > 9) {
        temp = new card(faces[i] + ' of ' + suits[j], faces[i], suits[j], 10);
      }
      else {
        temp = new card(faces[i] + ' of ' + suits[j], faces[i], suits[j], i + 1);
      }
      deck.push(temp);
    }
  }
}

shuffleDeck();