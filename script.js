var cardContainer = document.querySelector("#cards-container");
var cardOne = document.querySelector("#cardOne");
var cardTwo = document.querySelector("#cardTwo");
var cardOneBtn = document.querySelector("#cardOneBtn");
var cardTwoBtn = document.querySelector("#cardTwoBtn");
var cardOneImg = document.querySelector("#cardOneImg");
var cardTwoImg = document.querySelector("#cardTwoImg");
var cardOnePlayer = document.querySelector("#name1");
var cardTwoPlayer = document.querySelector("#name2");
var cardOneValue = document.querySelector("#value1");
var cardTwoValue = document.querySelector("#value2");
var players;
var indPlayers = [];

async function getPlayers(teamId) {
    const resp = await fetch(`https://v1.american-football.api-sports.io/players?team=${teamId}&season=2022`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "d561b7308ece78af36ebe4724aa26c96"
            // samiye: d52a11a4ff1c64263398d6e91826d199
            //grant: 8a595064b007930f5bae0de0827aeeb9
            //leah: d561b7308ece78af36ebe4724aa26c96
        }
    })
    return await resp.json()
}
start();

async function start() {
    // var players = await Promise.all([...Array(4)].map((num, index) => getPlayers(index + 1)))
    players = await Promise.all([32, 16, 15, 7].map((num) => getPlayers(num)))
    console.log(players);
    indPlayers = [...players[0].response, ...players[1].response, ...players[2].response, ...players[3].response];
    // console.log(indPlayers);
    populatePlayers();
}

function parseArr(arr) {
    var newArr = arr.filter(player => {
        return player.salary !== null
    });
    var newArr1 = newArr.filter(player => {
        return player.salary[0] === "$" || player.salary[0] === "(";
    })
    newArr1.forEach(player => {
        let str = "";
        for (let digit of player.salary) {

            if (!isNaN(parseInt(digit))) {
                str += digit;
            }
        }
        var num = parseInt(str);
        player.salNum = num;
        // console.log(player);
        // console.log(player.salary);
    })
    // if (typeof player.salary !== "string") {
    //     console.log(player.name, player.salary)
    // } else if (player.salary[0] !== "$") {
    //     console.log(player.salary)
    // }

    // newArr = arr.filter(player => {
    //     return player.salary.startsWith("$");
    // });

    // arr.filter(([key, value]) => typeof value !== null);
    // arr.filter(player => player.salary.startsWith("$"));
    // console.log(newArr1);
    indPlayers = newArr1;
}


var randomPlayer1 = "";
var randomPlayer2 = "";
var cardOneSal = "";
var cardTwoSal = "";
var pointTally = 0;
var wrongAns = 0;
console.log(randomPlayer1, randomPlayer2)


function populatePlayers() {
    parseArr(indPlayers);
    console.log(indPlayers);
    randomPlayer1 = Math.floor(Math.random() * indPlayers.length);
    randomPlayer2 = Math.floor(Math.random() * indPlayers.length);
    // if (indPlayers[randomPlayer1].salary === "null" || indPlayers[randomPlayer1].salary === "0-" || indPlayers[randomPlayer1].salary === "-") {
    //     randomPlayer1 = Math.floor(Math.random() * indPlayers.length);
    // };
    // if (indPlayers[randomPlayer2].salary === "null" || indPlayers[randomPlayer2].salary === "0-" || indPlayers[randomPlayer2].salary === "-") {
    //     randomPlayer2 = Math.floor(Math.random() * indPlayers.length);
    // };
    cardOneSal = indPlayers[randomPlayer1].salNum;
    cardTwoSal = indPlayers[randomPlayer2].salNum;
    const ranPlay1 = indPlayers[randomPlayer1].name;
    const ranPlay2 = indPlayers[randomPlayer2].name;
    cardOneValue.textContent = `Salary: ${indPlayers[randomPlayer1].salary}`
    cardOneImg.src = indPlayers[randomPlayer1].image
    cardTwoImg.src = indPlayers[randomPlayer2].image
    cardTwoValue.textContent = `Salary: ${indPlayers[randomPlayer2].salary}`
    cardOnePlayer.textContent = ranPlay1;
    cardTwoPlayer.textContent = ranPlay2;
}

cardOneBtn.addEventListener("click", function () {
    if (cardOneSal > cardTwoSal) {
        pointTally++;
    } else if (cardOneSal < cardTwoSal) {
        wrongAns++;
        console.log(wrongAns + " wrong guesses");
        // if (wrongAns === 3) {
        //     endGame();

    } else if (cardOneSal === cardTwoSal) {
        pointTally++;
    }
    console.log(pointTally + " correct guesses");
    populatePlayers();
})


cardTwoBtn.addEventListener("click", function () {
    if (cardOneSal < cardTwoSal) {
        pointTally++;
    } else if (cardOneSal > cardTwoSal) {
        wrongAns++;
        console.log(wrongAns + " wrong guesses");
        // if (wrongAns === 3) {
        //     endGame();

    } else if (cardOneSal === cardTwoSal) {
        pointTally++;
    }

    console.log(pointTally + " correct guesses");
    populatePlayers();
})



function endGame() {
    console.log("end the game!");

}


//https://v1.american-football.api-sports.io/players?team=1&season=2022

