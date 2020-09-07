function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function playGame(){
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	}
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	  }
	 else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
  }
//ruch gracza
let playerMove = getMoveName(playerInput);
console.log(playerMove);

//ruch komputera
let randomNumber = Math.floor(Math.random()*3 + 1);

let computerMove = getMoveName(randomNumber);
console.log(computerMove);
//wynik gry


function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagralem ' + argComputerMove + ' a Ty ' + argPlayerMove);
	if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('remis!');
		return;
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		printMessage('remis!');
		return;
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		printMessage('remis!');
		return;
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrałeś!');
		return;
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Wygrałeś!');
		return;
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrałeś!');
		return;
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Wygrałeś!');
		return;
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrałeś!');
		return;
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Wygrałeś!');
		return;
	}
	else {
		printMessage('error!');
		return;
	}

	
}

displayResult(computerMove, playerMove);
}
playGame(3);
/*
if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('remis!');
	
}
else if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('remis!');
	
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('remis!');
	
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrałeś!');
	
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrałeś!');
	
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('PRzegrałeś!');
	
}
else if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Wygrałeś!');
	
}
else {
	printMessage('error!');
	
}
*/