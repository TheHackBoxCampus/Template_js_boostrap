export default {
	aside_data(){
		localStorage.setItem('aside', JSON.stringify({
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
		}))
	},
	footer_data(){
		localStorage.setItem('footer', JSON.stringify({
			data: {
				developer: {
					name: 'Miller Developer',
					role: 'Campus'
				},
				copyright: '©Copyright'
			}
		}))
	},
	header_data(){
		localStorage.setItem('header', JSON.stringify({
			title:'MH370',
			details: {
				date: '8/03/2014',
				banner: 'El avión que desapareció',
				des: 'La misteriosa desaparición del avión de Malaysia Airlines que despegó el 8 de marzo de 2014 del aeropuerto de Kuala Lumpur con destino a Beijing, China, y nunca más se supo nada de él.A nueve años de la última vez que la torre de control tuvo contacto con la aeronave, son más las dudas que hay sobre el caso que las certezas.'
			}
		}))
	},
	main_data(){
		localStorage.setItem('main', JSON.stringify({
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
		}))
	},
	nav_data(){
		localStorage.setItem('nav', JSON.stringify({
			chapters_nav: {
				about: 'Acerca de MH370',
				info: 'Mas información',
			},
			features: {
				cards_1:{
					id: 1,
					title_Card: 'World',
					subtitle: 'Que se sabe?',
					des:'El avión comercial con 239 pasajeros a bordo debía aterrizar en Beijing a las 6:30 de la mañana. La última vez que se comunicó fue a la 1:21 de la madrugada',
					btn: 'Continue',
					url: 'assets/img/card_1.jpeg'
				} ,
				cards_2:{
					id: 2,
					title_Card: 'Nows',
					subtitle: 'Cadáveres mutilados',
					des:'la información aportada por el radar concordaba con la acción deliberada de una persona que tomó el control del avión, lo que rápidamente se ligó a un posible acto terrorista',
					btn: 'Continue',
					url: 'assets/img/card_2.jpeg'
				}  
			},
		}))
	},
	section_data(){
		localStorage.setItem('section', JSON.stringify({
			data: [
				{title: {
					hipo: 'Hipótesis de terrorismo',
					national: 'Nacionalidades de las personas a bordo del vuelo 370'
				},
				des: 'El ministro malasio de Transportes estuvo investigando y anunció el inicio de una investigación sobre terrorismo, teoría nacida a partir de los dos pasajeros que embarcaron con pasaportes robados. El FBI inició a su vez una investigación en la misma dirección. Según un experto en terrorismo consultado por NBC, es muy extraño que dos pasajeros con los pasaportes robados se encuentren en el mismo vuelo.Además, estos dos pasajeros habrían reservado sus pasajes a la vez.Después de que varias agencias iniciaran investigaciones sobre un posible acto terrorista, as autoridades afirmaron estar investigando cuatro posibles casos de identidad sospechosa a bordo del aparato,no habiéndose encontrado relación con el terrorismo en el caso de los dos iraníes que viajaban con pasaportes robados',
				crew: [
					{members:[130,38,10,7,6,5,4,4,4,4]},
					{members:[0,12,0,0,0,0,0,0,0,0,0]}
				]
				}],              
		}))        
	}
}