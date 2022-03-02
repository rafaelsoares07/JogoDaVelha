n1 = localStorage.getItem('name1')
n2 = localStorage.getItem('name2')

j1 = localStorage.getItem('j1').toUpperCase()
j2 = localStorage.getItem('j2').toUpperCase()



		console.log(n1)
		console.log(n2)

		

var jogador1 = n1
var jogador2 = n2


let squares = document.querySelectorAll('.square')
console.log(squares);


squares.forEach((square) =>{
	square.addEventListener('click', handleClick);
})

function handleClick(event){
	let square = event.target;
	let position = square.id;


	
	if(handMove(position)){

		setTimeout(()=>{
			var telaGameOver = document.querySelector('#gameOver')

			telaGameOver.style.visibility = 'visible';

			if(playerTime==0){

				setTimeout(()=>{
					alert("JOGADOR "+"("+j1+")"+" VENCEU A PARTIDA!")
				},500)
			}

			else{
				setTimeout(()=>{
					alert("JOGADOR "+"("+j2+")"+" VENCEU A PARTIDA!")
				},500)
			}

		},250);
		
	}

	updateSquares();
}


function updateSquares(){
let squares = document.querySelectorAll('.square')

squares.forEach((square) =>{
	let position = square.id
	let symbols = board[position];

	
	if (symbols == 'o'){
		square.innerHTML = `<div class="ajuste-tabuleiro"><img src='${jogador1}'></div>`

	}

	else if(symbols == 'x'){
		square.innerHTML = `<div class="ajuste-tabuleiro"><img src='${jogador2}'></div>`
	}
})
}








