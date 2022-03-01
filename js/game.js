
let board = ['','','','','','','','','',]
let playerTime= 0
let symbols = ['o','x']



function handMove(position){

	if(board[position]=='x'){
		return;
	}
	else if(board[position]=='o'){
		return;
	}

	else{
	
		board[position] = symbols[playerTime];

		if(playerTime == 0){
			playerTime = 1;
		}

		else{
			playerTime =0; 
		}
	}
	

	
}