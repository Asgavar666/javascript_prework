function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

/*RUCH GRACZA*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove = 'papier'
}
else{ playerMove = 'nożyce'};

printMessage('Twój ruch to: ' + playerMove);

/*RUCH KOMPUTERA */
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else{
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

/*LOGIKA GRY*/

if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis');
}
else if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Wygrales!');
}

else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrales!');
}
else if( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis');
}
else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrales!');
}
else if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrales!')
}
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis');
}
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Wygrales!');
}
else if( computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Przegrales!');
}
else{
	printMessage('Nieznany ruch');
}