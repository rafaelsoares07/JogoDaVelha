

var jogador1 = 'imgs/bubasauro.png'
var jogador2 = 'imgs/picachu.png'


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

	
	if (symbols == 'o'){
		square.innerHTML = `<div><img src='${jogador1}'></div>`

	}

	else if(symbols == 'x'){
		square.innerHTML = `<div><img src='${jogador2}'></div>`
	}
})
}








