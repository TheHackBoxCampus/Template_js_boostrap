export default {
	datas: {
		title: 'Véase también',
		links: ['Accidente en aviacion', 
			'misterios de la aviacion',
			'Desapariciones en aviacion',
			'Vuelo TC-48 de la FAA',
			'Vuelo 653 Malaysa',
			'Vuelo 2133 de Malaysa',
			'Vuelo 011 de SAETA', 
			'VUelo 007 de Korean Air',
			'Vuelo 17 de Malaysa',
			'Vuelo 447 de Air France',
			'Cosas interesantes de la aviacion'],
		social: [{
			subtitle: 'Acerca de mi..',
			github: 'https://github.com/TheHackBoxCampus'
		}]
	},
    
	render_aside() {
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