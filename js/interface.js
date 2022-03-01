import{x1} from 'selecao-dos-personagen.js'

var jogador1 = x1;
var jogador2 = x1;


let squares = document.querySelectorAll('.square')
console.log(squares);


squares.forEach((square) =>{
	square.addEventListener('click', handleClick);
})

function handleClick(event){
	let square = event.target;
	let position = square.id;

	handMove(position);

	updateSquares();
}


function updateSquares(){
let squares = document.querySelectorAll('.square')

squares.forEach((square) =>{
	let position = square.id
	let symbols = board[position];

	if(symbols == 'o'){
		square.innerHTML = `<div><img src='${jogador1}'></div>`

	}

	if (symbols == 'x'){
		square.innerHTML = `<div><img src='${jogador2}'></div>`
	}
})
}








