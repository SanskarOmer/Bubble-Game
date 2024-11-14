
var ScoreNow = 0;
var nt;

function makeBubble() {
    var repeat = "";
    for (var i = 0; i <= 84; i++) {
        repeat += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = repeat;
}

function increaseScore() {
    ScoreNow += 10;
    document.querySelector("#score").textContent = ScoreNow;

}

function changeHit() {
    nt = Math.floor(Math.random() * 10);
    document.querySelector("#hitnum").innerHTML = nt;
}

function runTimer() {
    var timer = 60;
    var timerInt = setInterval(() => {
        if (timer >= 0) {
            let nt = timer--;
            document.querySelector("#time").textContent = nt;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</H1>`;
            alert(`YOUR SCORE IS ${ScoreNow}`);
        }

    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function (res) {
    var selectedNum = Number(res.target.textContent);
    if (selectedNum == nt) {
        increaseScore();
        makeBubble();
        changeHit();
    }
}

)

makeBubble();
runTimer();
changeHit();
