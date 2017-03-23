/*

Card Game of War Exercise Part 2.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/
var scores = {'ace':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9, 'ten':10, 'jack':11, 'queen':13, 'king':12}

/*

Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/
class card {
    constructor (suit, rank, score) {
    this.suit = suit,
    this.rank = rank,
    this.score = score,
    this.title = rank + " of " + suit
  }
}

//console.log(new card ("hearts", "ace", "5"))

/*

Write a constructor function for a deck of cards. The deck should contain a property `cards` that is an array of the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will populate the `cards` array with all 52 card posibilities, using your card object from above. Someone should not be able to create a new deck of 52 cards if the deck's `cards` array already has cards in it

*/
class deckOfCards {
  constructor() {
    this.cards = []
    this.createNewDeck = function () {
      if (this.cards.length === 0) {
        for (var i = 0; i < suits.length; i++) {
          for (var j = 0; j < ranks.length; j++) {
            var newCard = new card(suits[i], ranks[j], scores[ranks[j]] )
            this.cards.push (newCard)
          }
        }
      }
    }
  }
}
var callDeckOfCards = new deckOfCards ()
// console.log(callDeckOfCards)
// console.log(callDeckOfCards.createNewDeck)
callDeckOfCards.createNewDeck()
console.log(callDeckOfCards)

/*


Write a constructor function called player. A player should have a username that is a string and a hand that is an array of cards.

Instantiate two instances of your player object.

*/
class createPlayer {
  constructor (username, hand) {
    if (!(hand instanceof Array)) {
      hand = []
    }
    this.username = username
    this.hand = hand
  }
}

var player1Hand = [new card("ace", "clubs", "1"),new card("two", "hearts", "2")]
var player2Hand = [new card("ace", "hearts", "1"),new card("jack", "clubs", "11")]


var player1 = new createPlayer("roger", player1Hand)
var player2 = new createPlayer("bob", player2Hand)

/*

Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which stands for node package manager and installing 3rd party libraries, perhaps to help us handle user input; the second will be on breaking our program into multiple files.

After that, we'll finish building out the game and you'll actually be able to play it!

*/

// console.log (player2Hand)
// console.log( player1Hand)
