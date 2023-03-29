import conf from '../storage/conf.js'

export default {
	render_footer() {
		conf.footer_data()
		Object.assign(this, JSON.parse(localStorage.getItem('footer')))
		let footer = document.querySelector('#footer')
		let wsFooter = new Worker('src/workers/workerFooter.js')
		wsFooter.postMessage({resources: this.data})
		wsFooter.addEventListener('message', e => {
			footer.insertAdjacentHTML('beforeend', e.data)
		})
	}
}