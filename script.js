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


async function getPlayers(teamId) {
    const resp = await fetch(`https://v1.american-football.api-sports.io/players?team=${teamId}&season=2022`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "d561b7308ece78af36ebe4724aa26c96"
        }
    })
    return await resp.json()
}

async function start() {
    const players = await getPlayers(2)
    console.log(players)
}

start()


//https://v1.american-football.api-sports.io/players?team=1&season=2022


// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             //Loop over the data to generate a table, each table row will have a link to the repo url
//             for (var i = 0; i < data.length; i++) {
//                 // Creating elements, tablerow, tabledata, and anchor
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');
//                 var link = document.createElement('a');

//                 // Setting the text of link and the href of the link. this specifies the property within the data
//                 link.textContent = data[i].html_url;
//                 link.href = data[i].html_url;

//                 // Appending the link to the tabledata and then appending the tabledata to the tablerow
//                 // The tablerow then gets appended to the tablebody
//                 tableData.appendChild(link);
//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//             }
//         });
// }


/* branch name js-pseudo 
notes 
-cards and styling done through html and css for the most part 
-will need to start by defining variables with query selectors 
-will need to isolate the data points we want from the API 
-create a function that 
    a) randomly pulls player data from API array 
    b) displays on the page using a for loop 
    c) will need variables that specifically signify the number value at any given index
-separate function for user choice- this will contain logic for keeping score, and if statements to make sure the correct value is being attributed during gameplay. make this an event listener function? 
-at end of game, we will need some kind of button that leads to scoreboard page? do we want the user to input their name on this window, or the score window? to discuss 

-if modal for instructions on navbar, the js will need to be on all three files for consistency 















*/