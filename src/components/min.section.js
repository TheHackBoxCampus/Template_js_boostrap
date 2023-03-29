import conf from '../storage/conf.js'

export default {
	acm(arr){
		let ac = arr.reduce((a, i) => a + i)
		arr.push(ac)
	},

	render_section(pays) {
		conf.section_data()
		Object.assign(this, JSON.parse(localStorage.getItem('section')))
		const wsSection = new Worker('src/workers/workerSection.js')
		let section = document.querySelector('#article_section')
		for(let w = 0; w < 2; ++w) {
			this.acm(this.data[0].crew[w].members)
		}
		wsSection.postMessage({module: 'render_section', resources: [this.data, pays]})
		wsSection.addEventListener('message', e => {
			section.insertAdjacentHTML('beforeend', e.data)
			wsSection.terminate()
		})
	}
}