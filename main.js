var cardsLeft = 47;
var buttons = ["håll","håll","håll","håll","håll"];

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
    }

    console.log(tempDeck);

    while (tempDeck.length != 0) {
        let randPos = Math.floor(Math.random() * (tempDeck.length));
        deck.push(tempDeck[randPos]);

        const index = tempDeck.indexOf(tempDeck[randPos]);
        if (index > -1) {
            tempDeck.splice(index, 1);
        }
    }
}


shuffleTwo(cards);

console.log(cards);

function printCards(deck) {
    for (let i = 1; i < 6; i++) {
        let topCard = deck.shift();
        console.log(topCard);
        document.getElementById("kort"+i).innerHTML += "<img id=\"img"+i+"\"" +" src=\"poker-qr\\" + topCard.rank + topCard.suit +".svg\" alt=\"Pokerkort\" width=\"250\" height=\"363\">";

    }
}

printCards(cards);


function buttonClicked(i) {
    if (buttons[i-1]=="håll") {
        buttons[i-1]="kasta";
        document.getElementById("kort"+i).style = "opacity: 0.7";
        document.getElementById("knapp"+i).innerHTML = "Kasta";
        document.getElementById("knapp"+i).style = "background-color: rgb(255, 98, 98);"/*Red*/;
        document.getElementById("knapp"+i).style.color = "black";
    }
    else if (buttons[i-1]="kasta") {
        buttons[i-1]="håll";
        document.getElementById("kort"+i).style = "opacity: 1";
        document.getElementById("knapp"+i).innerHTML = "Håll";
        document.getElementById("knapp"+i).style = "background-color: #4CAF50;"/*Green*/;
        document.getElementById("knapp"+i).style.color = "white";
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

function changeCards(deck) {
    for (let i = 1; i < 6; i++) {
        if (buttons[i-1]=="kasta") {
            let topCard = deck.shift();
            document.getElementById("kort"+i).innerHTML = "<img id=\"img"+i+"\"" +" src=\"poker-qr\\" + topCard.rank + topCard.suit +".svg\" alt=\"Pokerkort\" width=\"250\" height=\"363\">";

            cardsLeft -= 1;
            document.getElementById("remainingcards").innerHTML = "<p>Det är " +cardsLeft + " kort kvar i kortleken</p>"
            
            buttons[i-1]="håll";
            document.getElementById("kort"+i).style = "opacity: 1";
            document.getElementById("knapp"+i).innerHTML = "Håll";
            document.getElementById("knapp"+i).style = "background-color: #4CAF50;"/*Green*/;
            document.getElementById("knapp"+i).style.color = "white";
        }
        
    }
    console.log(cards)
}

document.getElementById("byte").addEventListener("click", function() {
    try {changeCards(cards);
    } catch (error) {
        console.error(error);
        alert("Det finns inte tillräckligt många kort kvar i kortleken!");
    }
});