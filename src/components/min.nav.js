import conf from '../storage/conf.js'

export default {
	render_paragraphs() {
		conf.nav_data()
		Object.assign(this, JSON.parse(localStorage.getItem('nav')))
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
