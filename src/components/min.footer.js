export default {
	data: {
		developer: {
			name: 'Miller Developer',
			role: 'Campus'
		},
		copyright: '©Copyright'
	},

	render_footer() {
		let footer = document.querySelector('#footer')
		let wsFooter = new Worker('src/workers/workerFooter.js')
		wsFooter.postMessage({resources: this.data})
		wsFooter.addEventListener('message', e => {
			footer.insertAdjacentHTML('beforeend', e.data)
		})
	}
}