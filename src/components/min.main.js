import conf from '../storage/conf.js'
let wsAbout 

export default {
	render_list_pays(format){
		conf.main_data()
		Object.assign(this, JSON.parse(localStorage.getItem('main')))
		return this.data_main[3].pays.map(pay => `<${format} class="fs-5">${pay}</${format}>`)
	},

	render_about() {
		let pay_format = this.render_list_pays('li')
		let about = document.querySelector('#about')
		let text_span = document.querySelector('#subtitle_span')
		wsAbout = new Worker('src/workers/workermain.js')
		wsAbout.postMessage({methods: ['render_about', 'render_info'], 
			resources: [[this.info_about.title, this.info_about.text, this.info_about.text_span], this.data_main, pay_format]})
		
		wsAbout.addEventListener('message', e => {
			let res = e.data
			about.insertAdjacentHTML('beforeend', res[0][0])
			text_span.innerHTML += res[0][1]
			wsAbout.terminate()
		})
	},

	render_info_main() {
		let article = document.querySelector('#article_main') 
		wsAbout.addEventListener('message', e => {
			let res = e.data
			article.insertAdjacentHTML('beforeend', res[1])
			wsAbout.terminate()
		})
	},
}
 