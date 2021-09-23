var cardsLeft = 47;
var buttons = ["håll","håll","håll","håll","håll"];


function createDeck() {
    deck = [];
    const suits = ["H","S","D","C"];
    const ranks = ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"];
        
    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({
                suit: suit,
                rank: rank
            })
        })
    })
    return deck;
}
    
var cards = createDeck();

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

        if (randPos > -1) {
            tempDeck.splice(randPos, 1);
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
        document.getElementById("img"+i).style = "opacity: 0.2";
        document.getElementById("kort"+i).innerHTML = document.getElementById("kort"+i).innerHTML + "<div class=\"cardtext\">Kasta</div>";
        
        document.getElementById("knappb"+i).innerHTML = "Kasta";
        document.getElementById("knappb"+i).style = "background-color: rgb(255, 98, 98);"/*Red*/;
        document.getElementById("knappb"+i).style.color = "black";
    }
    else if (buttons[i-1]="kasta") {
        buttons[i-1]="håll";
        document.getElementById("img"+i).style = "opacity: 1";
        document.getElementById("kort"+i).innerHTML = document.getElementById("kort"+i).innerHTML.replace('<div class=\"cardtext\">Kasta</div>','');

        document.getElementById("knappb"+i).innerHTML = "Håll";
        document.getElementById("knappb"+i).style = "background-color: #4CAF50;"/*Green*/;
        document.getElementById("knappb"+i).style.color = "white";
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
            document.getElementById("knappb"+i).innerHTML = "Håll";
            document.getElementById("knappb"+i).style = "background-color: #4CAF50;"/*Green*/;
            document.getElementById("knappb"+i).style.color = "white";
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