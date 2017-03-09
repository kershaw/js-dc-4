// var i = 0, CombinedArray = [];
// for (; i < suits.length; i++) {
//   CombinedArray[i] = suits[i] + ranks[i];
// }
// for (; i < ranks.length; i++) {
//   CombinedArray[i] = ranks[i];
// }
// }
/*

Card Game of War Exercise Part 1.

*/
//
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var deckOfCards = []


/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/

function createDeck (ranks, suits) {

  for (var i = 0; i < suits.length; i++) {
  //  deckOfCards[i] = suits[i] + ranks[i];
    for (var j = 0; j < ranks.length; j++) {
      // deckOfCards[i] = ranks[i];
      deckOfCards.push( suits[i] + " " + ranks[j] )
      // console.log(suits[i] + " " + ranks[j])
    }

  }

}
createDeck( ranks, suits )
//console.log(deckOfCards)


/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/

var getRandomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)]

console.log(getRandomCard)

/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/




/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/




/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/




/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
