/**
 * PLAY and PAUSE buttons can be switched by clicking it
 */
function play(){
    var temp = document.getElementById("playBtn").textContent;
    if(temp === "PLAY"){
        document.getElementById("playBtn").innerText="PAUSE";
    } else {
        document.getElementById("playBtn").innerText="PLAY";
    }
    makeTable();
}

/**
 * make a card table, 8 rows * 13 columns, with the back of cards 
 */
function makeTable(){
    var cardTable = "";
    cardTable += "<table class='table'>";
    for(var row=0; row<5; row++){
        cardTable += "<tr>";
        var symbol = "";
        for(var col=0; col<10; col++){
            cardTable += "<td>" + "<img src='./img/back.png'>" + "</td>"
        }
        cardTable += "</tr>"
    }
    cardTable += "</table>";
    document.getElementById("cardTable").innerHTML = cardTable;
}

function pickRandomCard(){
    
}

