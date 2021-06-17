function play(){
    var temp = document.getElementById("playBtn").textContent;
    if(temp === "PLAY"){
        document.getElementById("playBtn").innerText="PAUSE";
    } else {
        document.getElementById("playBtn").innerText="PLAY";
    }
}
