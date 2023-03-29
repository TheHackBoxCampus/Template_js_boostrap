import conf from '../storage/conf.js'

export default {
	render_title_date() {
		conf.header_data()
		Object.assign(this, JSON.parse(localStorage.getItem('header')))
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
