export default {
    info_about: {
        title: "Mas acerca de MH370!",
        text: `El vuelo debió durar alrededor de cinco horas y media, pero nunca llegó a su destino. Las exhaustivas búsquedas y las meticulosas investigaciones no pudieron aportar nuevos datos, más allá de la aparición de 33 posibles piezas de la aeronave en seis países diferentes.`,
        text_span: "Malasyan Airlines"
    },
    data_main: { 
        title_aside_chapter_one:"Despegue y perdida de contacto",
        des_aside_chapter_one:`El vuelo partió del aeropuerto Internacional de Kuala Lumpur a las 00:41 hora de Malasia (16:41, 7 de marzo UTC), el vuelo continuo con normalidad, con Malaysia Airlines manteniendo comunicaciones con el piloto, como así también con la aeronave en el radar, pero más tarde, específicamente a las 01:22, cuando el avión se preparaba para entrar al espacio aéreo de Vietnam, el control del tráfico aéreo de Subang (Malasia) perdió contacto por radar y radio con el avión en las coordenadas 6°55′15″N 103°34′43″E,46​ en un punto del mar de China Meridional, bajo control de Vietnam, muy cercano a la frontera malaya.47​ El avión dejó de comunicar y la señal del transpondedor se perdió48​ justo antes de pasar al centro de control del área de Ho Chi Minh.17​49​ ` ,
        // -------------------
        title_aside_chapter_two: `Comunicado de desaparición`,
        des_aside_chapter_two: `La página web de Aviation Herald informó de que el control de tráfico aéreo de Subang (Malasia) perdió contacto por radar y radio con el avión a las 01:22 y que Vietnam no había detectado el avión sobrevolando su territorio. Oficialmente advirtió a Malaysia Airlines a las 02:40 que la aeronave estaba desaparecida.18​Sin embargo, un portavoz de Malaysia Airlines dijo que la última conversación entre la tripulación de vuelo y el control del tráfico aéreo en Malasia había sido alrededor de la 01:30 y declaró que el avión no desapareció de los sistemas de control del tráfico aéreo en Subang hasta las 2:40, tiempo suficiente para que el avión hubiera estado volando sobre Vietnam.50​ `,
        // -------------------
        title_aside_chapter_three: `Comunicaciones posteriores`,
        des_aside_chapter_three: `La revista New Scientist informó que, antes de la desaparición de la aeronave, dos informes automáticos ACARS habían sido enviados al centro de monitoreo de motores que Rolls-Royce, la empresa proveedora de los motores, posee en el Reino Unido y el Wall Street Journal, citando fuentes del Gobierno norteamericano, indicó que Rolls-Royce había recibido un informe de estado de la aeronave cada treinta minutos durante cinco horas, con lo que implícitamente se indicaba que la aeronave había estado operativa durante cuatro horas luego de que el transpondedor dejara de funcionar`,
        
        title_aside_chapter_four: "Nacionalidades de las personas a bordo del vuelo 370",
        pays_aside_chapter_four: ["🇨🇳 China", "🇲🇾 Malasia", "🇬🇧 Reino Unido", "🇮🇩 Indonesia", "🇦🇺 Austrialia", "🇮🇳 India", "🇩🇪 Alemania", "🇧🇪 Belgica", "🇺🇸 Estados unidos", "🇫🇷 Francia"]
    },
    render_about() {
        let content = `
        <h4 class="fst-italic" >${this.info_about.title}</h4>
        <p class="mb-0">${this.info_about.text}</p>
        `
        let about = document.querySelector("#about"); 
        let text_span = document.querySelector("#subtitle_span"); 
        return (about.insertAdjacentHTML("beforeend", content), text_span.innerHTML += this.info_about.text_span);
    },
    render_main() {
        let content = ""; 
        let pay_format = this.data_main.pays_aside_chapter_four.map(pay => `<li class="fs-5">${pay}</li>`); 
        
        for(let info in this.data_main){
            if(info != this.data_main.pays_aside_chapter_four){
                content+= `
                <span class="fs-1">${this.data_main[info]}</span><br>
                <p class="my-3">${this.data_main[info]}</p><br>`
            }
            break;
        }

        content += `
        <ul>
            ${pay_format.join("")}
        </ul>
        `
        let article = document.querySelector("#article_main"); 
        article.insertAdjacentHTML("beforeend", content); 
    },
    example() {
        
    }
}
 