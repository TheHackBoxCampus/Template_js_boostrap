let wsAbout 
export default {
	info_about: {
		title: 'Mas acerca de MH370!',
		text: 'El vuelo debió durar alrededor de cinco horas y media, pero nunca llegó a su destino. Las exhaustivas búsquedas y las meticulosas investigaciones no pudieron aportar nuevos datos, más allá de la aparición de 33 posibles piezas de la aeronave en seis países diferentes.',
		text_span: 'Malasyan Airlines'
	},
	data_main: [ 
		{title:'Despegue y perdida de contacto',
			des:'El vuelo partió del aeropuerto Internacional de Kuala Lumpur a las 00:41 hora de Malasia (16:41, 7 de marzo UTC), el vuelo continuo con normalidad, con Malaysia Airlines manteniendo comunicaciones con el piloto, como así también con la aeronave en el radar, pero más tarde, específicamente a las 01:22, cuando el avión se preparaba para entrar al espacio aéreo de Vietnam, el control del tráfico aéreo de Subang (Malasia) perdió contacto por radar y radio con el avión en las coordenadas 6°55′15″N 103°34′43″E,46​ en un punto del mar de China Meridional, bajo control de Vietnam, muy cercano a la frontera malaya.47​ El avión dejó de comunicar y la señal del transpondedor se perdió48​ justo antes de pasar al centro de control del área de Ho Chi Minh.' },
		// -------------------
		{title: 'Comunicado de desaparición',
			des: 'La página web de Aviation Herald informó de que el control de tráfico aéreo de Subang (Malasia) perdió contacto por radar y radio con el avión a las 01:22 y que Vietnam no había detectado el avión sobrevolando su territorio. Oficialmente advirtió a Malaysia Airlines a las 02:40 que la aeronave estaba desaparecida.Sin embargo, un portavoz de Malaysia Airlines dijo que la última conversación entre la tripulación de vuelo y el control del tráfico aéreo en Malasia había sido alrededor de la 01:30 y declaró que el avión no desapareció de los sistemas de control del tráfico aéreo en Subang hasta las 2:40, tiempo suficiente para que el avión hubiera estado volando sobre Vietnam.50​ '},
		// -------------------
		{title: 'Comunicaciones posteriores',
			des: 'La revista New Scientist informó que, antes de la desaparición de la aeronave, dos informes automáticos ACARS habían sido enviados al centro de monitoreo de motores que Rolls-Royce, la empresa proveedora de los motores, posee en el Reino Unido y el Wall Street Journal, citando fuentes del Gobierno norteamericano, indicó que Rolls-Royce había recibido un informe de estado de la aeronave cada treinta minutos durante cinco horas, con lo que implícitamente se indicaba que la aeronave había estado operativa durante cuatro horas luego de que el transpondedor dejara de funcionar'},
        
		{title: 'Repercuciones',
			des:'La aerolínea confirmó el inicio de las operaciones de búsqueda, y dos barcos de rescate chinos se desplazaron al mar de China Meridional para colaborar. Las autoridades malayas también enviaron un avión, dos helicópteros y cuatro navíos para participar en los trabajos de búsqueda. De manera inmediata otros países se sumaron al esfuerzo de búsqueda',
			pays: ['🇨🇳 China', '🇲🇾 Malasia', '🇬🇧 Reino Unido', '🇮🇩 Indonesia', '🇦🇺 Austrialia', '🇮🇳 India', '🇩🇪 Alemania', '🇧🇪 Belgica', '🇺🇸 Estados unidos', '🇫🇷 Francia']}
	],
	
	render_list_pays(format){
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
 