{
	const printMessage = function(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
		
	}

	const clearMessages = function(){
		document.getElementById('messages').innerHTML = '';
	}
	const playGame = function(playerInput){

		clearMessages();
		

		const getMoveName = function(argMoveId){
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
			return 'nieznany ruch';
			}
		}
		//ruch gracza
		const playerMove = getMoveName(playerInput);
		console.log(playerMove);

		//ruch komputera
		const randomNumber = Math.floor(Math.random()*3 + 1);

		const computerMove = getMoveName(randomNumber);
		console.log(computerMove);
		//wynik gry


		const displayResult = function(argComputerMove, argPlayerMove){
			printMessage('Zagralem ' + argComputerMove + ' a Ty ' + argPlayerMove);
			if(argComputerMove === argPlayerMove){
				printMessage('remis!');
				
			}
			
				
			
			else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
				printMessage('Wygrałeś!');
				
			}
			
			
			else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
				printMessage('Wygrałeś!');
				
			}
			else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
				printMessage('Wygrałeś!');
				
			}
			else {
				printMessage('Przegrales!');
				
			}

			
		}

		displayResult(computerMove, playerMove);
		}

	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});
}