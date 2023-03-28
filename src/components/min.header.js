export default {
	title:'MH370',
	details: {
		date: '8/03/2014',
		banner: 'El avión que desapareció',
		des: 'La misteriosa desaparición del avión de Malaysia Airlines que despegó el 8 de marzo de 2014 del aeropuerto de Kuala Lumpur con destino a Beijing, China, y nunca más se supo nada de él.A nueve años de la última vez que la torre de control tuvo contacto con la aeronave, son más las dudas que hay sobre el caso que las certezas.'
	},
	render_title_date() {
		let t = document.querySelector('#title__container')   
		let e = document.querySelector('#date__container') 
		const ws = new Worker('src/workers/WorkerTitle.js')
		ws.postMessage({module: ['render_title', 'render_banner'], resources: [this.title, this.details.date]})		
		
		ws.addEventListener('message', res => {
			let arr = res.data
			t.insertAdjacentHTML('beforeend', arr[0])
			e.insertAdjacentHTML('beforeend', arr[1])
			ws.terminate()
		})
	},
	render_banner(obj) {
		let div = document.querySelector('#banner') 
		const wsBanner = new Worker('src/workers/workerBanner.js')
		wsBanner.postMessage({module: 'render_banner', info: obj})
		wsBanner.addEventListener('message', d => {
			let res = d.data
			div.insertAdjacentHTML('beforeend', res)
			wsBanner.terminate()
		})
	}
}   
