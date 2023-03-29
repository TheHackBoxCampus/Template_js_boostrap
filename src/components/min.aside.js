import conf from '../storage/conf.js'

export default {
	render_aside() {
		conf.aside_data()
		Object.assign(this, JSON.parse(localStorage.getItem('aside')))
		let aside = document.querySelector('#aside')
		let aside_social = document.querySelector('#aside_developer')
		const wsAside = new Worker('src/workers/workerAside.js')
		wsAside.postMessage({module: 'render_aside', resources: this.datas})
		wsAside.addEventListener('message', e => {
			aside.insertAdjacentHTML('beforeend', e.data[0])
			aside_social.insertAdjacentHTML('beforeend', e.data[1])
		})
        
	}
}