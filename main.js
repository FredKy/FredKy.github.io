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


function shuffle(deck) {
    let tempDeck = [];
    while (deck.length != 0) {
       tempDeck.push(deck.pop());
    }

    while (tempDeck.length != 0) {
        let randPos = Math.floor(Math.random() * (tempDeck.length));
        deck.push(tempDeck[randPos]);
        tempDeck.splice(randPos, 1);
    }
}


shuffle(cards);

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
        
    }
    else if (buttons[i-1]="kasta") {
        buttons[i-1]="håll";
        document.getElementById("img"+i).style = "opacity: 1";
        document.getElementById("kort"+i).innerHTML = document.getElementById("kort"+i).innerHTML.replace('<div class=\"cardtext\">Kasta</div>','');

    }

}

for (let i=1; i < 6; i++) {
    document.getElementById("knapp"+i).addEventListener("click", function() {
        buttonClicked(i);
    });
}

function changeCards(deck) {
    for (let i = 1; i < 6; i++) {
        if (buttons[i-1]=="kasta") {
            let topCard = deck.shift();
            document.getElementById("kort"+i).innerHTML = "<img id=\"img"+i+"\"" +" src=\"poker-qr\\" + topCard.rank + topCard.suit +".svg\" alt=\"Pokerkort\" width=\"250\" height=\"363\">";

            document.getElementById("remainingcards").innerHTML = "<p>Det är " +deck.length + " kort kvar i kortleken</p>"
            
            buttons[i-1]="håll";
            document.getElementById("kort"+i).style = "opacity: 1";
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