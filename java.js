
let gameField;
let infoField;
let guessField;
let id;

document.addEventListener('DOMContentLoaded', function(event) { 
  gameField = document.querySelector("#gameName");
  infoField = document.getElementById('info');
  guessField = document.querySelector("#guess");
})

//Search button uses Steam's search engine to locate the id of the game and double checks with the user that the game is correct.
async function search() {
const url = 'https://games-details.p.rapidapi.com/search?sugg=' + gameField.value;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bfd94b1890mshceeac0078f1f96dp121678jsn637b7c739acc',
		'x-rapidapi-host': 'games-details.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
  console.log(result);
	console.log(result.data.search[0].id);
  id = result.data.search[0].id;
  infoField.innerHTML = "Game Found! Now try to guess what year "+ result.data.search[0].name + " released on Steam?";
} catch (error) {
	console.error(error);
}
}

//Guess button uses the id from the search function to get the release date but oh uh the API doesn't actually work and every single release date is blank.
//Ill leave this code here so my efforts are shown.
async function guess() {
  const url = 'https://games-details.p.rapidapi.com/gameinfo/single_game/' + id;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bfd94b1890mshceeac0078f1f96dp121678jsn637b7c739acc',
		'x-rapidapi-host': 'games-details.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  console.log(result);
  infoField.innerHTML= "Womp Womp the API can't properly get release dates like advertised. Wish I knew that earlier. Here is the " + '<a href="https://rapidapi.com/asusalman986/api/games-details">API Link </a>' +'Leave em a nice review :)';
} catch (error) {
	console.error(error);
}
}