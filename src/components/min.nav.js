export default {
	chapters_nav: {
		about: 'Acerca de MH370',
		info: 'Mas información',
	},
	features: {
		cards_1:{
			id: 1,
			title_Card: 'World',
			subtitle: 'Que se sabe?',
			des:'El avión comercial con 239 pasajeros a bordo debía aterrizar en Beijing a las 6:30 de la mañana. La última vez que se comunicó fue a la 1:21 de la madrugada',
			btn: 'Continue',
			url: 'assets/img/card_1.jpeg'
		} ,
		cards_2:{
			id: 2,
			title_Card: 'Nows',
			subtitle: 'Cadáveres mutilados',
			des:'la información aportada por el radar concordaba con la acción deliberada de una persona que tomó el control del avión, lo que rápidamente se ligó a un posible acto terrorista',
			btn: 'Continue',
			url: 'assets/img/card_2.jpeg'
		}  
	},
	render_paragraphs() {
		let d = document.querySelector('#nav') 
		const wsNav = new Worker('src/workers/workerNav.js')
		wsNav.postMessage({module: 'render_paragraphs', chapters: this.chapters_nav})

		wsNav.addEventListener('message', e => { 
			let res = e.data 
			d.insertAdjacentHTML('beforeend', res) 
			wsNav.terminate()
		})
	},
	render_cards() {
		let card1 = document.querySelector('#card_1')
		let card2 = document.querySelector('#card_2')
		const wsCards = new Worker('src/workers/workerCards.js')
		wsCards.postMessage({module: 'render_cards', resources: this.features})		
		
		wsCards.addEventListener('message', e => {
			let res = e.data
			card1.innerHTML += res[0]
			card2.innerHTML += res[1]					
		})
		
	}
}
