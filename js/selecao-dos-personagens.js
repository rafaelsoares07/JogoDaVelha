

/*capturas ds elementos e adicao da fun~ção     pode simplificar com for e tirar esses indices ......*/
		var play1 = document.getElementsByClassName('p1')
		play1[0].addEventListener('click',clicouP1)
		play1[1].addEventListener('click',clicouP1)
		play1[2].addEventListener('click',clicouP1)
		play1[3].addEventListener('click',clicouP1)
		play1[4].addEventListener('click',clicouP1)



		var play2 = document.getElementsByClassName('p2')
		play2[0].addEventListener('click',clicouP2)
		play2[1].addEventListener('click',clicouP2)
		play2[2].addEventListener('click',clicouP2)
		play2[3].addEventListener('click',clicouP2)
		play2[4].addEventListener('click',clicouP2)


		  function clicouP1(event){
			let item = event.target
			console.log(item)

			play1[0].classList.remove('selecionado')
			play1[1].classList.remove('selecionado')
			play1[2].classList.remove('selecionado')
			play1[3].classList.remove('selecionado')
			play1[4].classList.remove('selecionado')

			item.classList.add("selecionado")

			let x = item.getAttribute("src")
			
			let y = "p1"
			console.log(x)
			excluirOpcao(x,y)
		}

		function clicouP2(event){
			let item = event.target
			console.log(item)

			play2[0].classList.remove('selecionado')
			play2[1].classList.remove('selecionado')
			play2[2].classList.remove('selecionado')
			play2[3].classList.remove('selecionado')
			play2[4].classList.remove('selecionado')

			item.classList.add("selecionado")



			let x = item.getAttribute("src")
			
			let y = "p2"
			console.log(x)
			excluirOpcao(x,y)
		}


		

		function excluirOpcao(elemento, numPlayer){
			console.log(numPlayer)

			if(numPlayer=='p1'){

				play2[0].classList.remove('excluido-selecao')
				play2[1].classList.remove('excluido-selecao')
				play2[2].classList.remove('excluido-selecao')
				play2[3].classList.remove('excluido-selecao')
				play2[4].classList.remove('excluido-selecao')

					for(let i=0; i<5;i++){
						if(play2[i].getAttribute("src")==elemento){
							play2[i].classList.add('excluido-selecao')
						}
					}
				}


				if(numPlayer=='p2'){

				play1[0].classList.remove('excluido-selecao')
				play1[1].classList.remove('excluido-selecao')
				play1[2].classList.remove('excluido-selecao')
				play1[3].classList.remove('excluido-selecao')
				play1[4].classList.remove('excluido-selecao')

					for(let i=0; i<5;i++){
						if(play1[i].getAttribute("src")==elemento){
							play1[i].classList.add('excluido-selecao')
						}
					}
				}
			
		}