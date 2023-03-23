export default {
    info_about: {
        title: "Mas acerca de MH370!",
        text: `El vuelo debió durar alrededor de cinco horas y media, pero nunca llegó a su destino. Las exhaustivas búsquedas y las meticulosas investigaciones no pudieron aportar nuevos datos, más allá de la aparición de 33 posibles piezas de la aeronave en seis países diferentes.`,
        text_span: "Malasyan Airlines"
    },
    render_about() {
        let content = `
        <h4 class="fst-italic" >${this.info_about.title}</h4>
        <p class="mb-0">${this.info_about.text}</p>
        `
        let about = document.querySelector("#about"); 
        let text_span = document.querySelector("#subtitle_span"); 
        return (about.insertAdjacentHTML("beforeend", content), text_span.innerHTML += this.info_about.text_span);
    }
}
 