var cards = [];
for (suit = 4; suit > 0; suit--) {
  for (rank = 13; rank > 0; rank--) {
    cards.push({
      suit: suit,
      rank: rank
    });
  }
}

console.log(cards);

cards.forEach(element => {
    if (element.suit == 1) {
        element.suit = "H";
    }

    else if (element.suit == 2) {
        element.suit = "S";
    }
    
    else if (element.suit == 3) {
        element.suit = "D";
    }

    else if (element.suit == 4) {
        element.suit = "C";
    }

    if (element.rank == 1) {
        element.rank = "A";
    }

    else if (element.rank == 10) {
        element.rank = "T";
    }

    else if (element.rank == 11) {
        element.rank = "J";
    }

    else if (element.rank == 12) {
        element.rank = "Q";
    }

    else if (element.rank == 13) {
        element.rank = "K";
    }

});

console.log(cards);


/*function Deck() {
    this.cards = [];
    for (suit = 4; suit > 0; suit--) {
      for (rank = 13; rank > 0; rank--) {
        this.cards.push({
          suit: suit,
          rank: rank
        });
      }
    }
  }
*/

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function shuffleTwo(deck) {
    let tempDeck = [];
    while (deck.length != 0) {
       tempDeck.push(deck.pop());
       //console.log(tempDeck);
    }

    console.log(tempDeck);

    for (let i = tempDeck.length-1; i > -1; i--) {
        let randPos = Math.floor(Math.random() * (i + 1));
        deck.push(tempDeck[randPos]);
        //console.log(deck);
        //console.log(deck.length);
    }
}

//console.log(Math.floor(Math.random() * (52)));

shuffleTwo(cards);

//console.log(cards.length);

console.log(cards);

function printCards(deck) {
    for (let i = 1; i < 6; i++) {
        document.getElementById("kort"+i).innerHTML += "<img id=\"img"+i+"\"" +" src=\"poker-qr\\" + deck[i-1].rank + deck[i-1].suit +".svg\" alt=\"Pokerkort\" width=\"250\" height=\"363\">";

        
        //console.log(deck[i].rank);
    }
}

printCards(cards);

var buttons = ["håll","håll","håll","håll","håll"];

function buttonClicked(b) {
    if (buttons[b-1]=="håll") {
        buttons[b-1]="kasta";
        document.getElementById("kort"+b).style = "opacity: 0.7";
        document.getElementById("knapp"+b).innerHTML = "Kasta";
        document.getElementById("knapp"+b).style = "background-color: rgb(255, 98, 98)"/*Red*/;
        console.info(buttons);
    }
    else if (buttons[b-1]="kasta") {
        buttons[b-1]="håll";
        document.getElementById("kort"+b).style = "opacity: 1";
        document.getElementById("knapp"+b).innerHTML = "Håll";
        document.getElementById("knapp"+b).style = "background-color: #4CAF50"/*Green*/;
        console.info(buttons);
    }

}

document.getElementById("knapp1").addEventListener("click", function() {
    buttonClicked(1);
});

for (let i=2; i < 6; i++) {
    document.getElementById("knapp"+i).addEventListener("click", function() {
        buttonClicked(i);
    });
}