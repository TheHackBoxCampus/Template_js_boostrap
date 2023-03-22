export default {
    chapters_nav: {
        about: "About MH370",
        info: "More info",
    },
    features: {
      cards_1:{
        id: 1,
        title_Card: "World",
        subtitle: "Que se sabe?",
        des:"El avión comercial con 239 pasajeros a bordo debía aterrizar en Beijing a las 6:30 de la mañana. La última vez que se comunicó fue a la 1:21 de la madrugada",
        btn: "Continue",
        url: "../../assets/img/card_1.jpeg"
      } ,
      cards_2:{
        id: 2,
        title_Card: "Nows",
        subtitle: "Cadáveres mutilados",
        des:"la información aportada por el radar concordaba con la acción deliberada de una persona que tomó el control del avión, lo que rápidamente se ligó a un posible acto terrorista",
        btn: "Continue",
        url: "../../assets/img/card_2.jpeg"
      }  
    },
    consume_() {
        let content = ""; 
        let d = document.querySelector("#nav"); 
        for(let inf in this.chapters_nav){
            content = `<a class="p-2 link-secondary" href="#">${this.chapters_nav[inf]}</a>`
            d.insertAdjacentHTML("beforeend", content); 
        }
    },
    card() {
        let card1 = document.querySelector("#card_1");
        let card2 = document.querySelector("#card_2");
        let cont = ""; 
        for(let card in this.features){
            cont =  `
            <div class="col p-4 d-flex flex-column position-static gap-1">
            <strong class="d-inline-block text-primary">${this.features[card].title_Card}</strong>
            <h3 class="mb-0">${this.features[card].subtitle}</h3>
            <p class="card-text mb-auto">${this.features[card].des}</p>
            <a href="#" class="stretched-link">${this.features[card].btn}</a>
          </div>
          <img class="col-4 col-md-5" src=${this.features[card].url}>
         `
         this.features[card].id == 1 ? card1.innerHTML += cont : card2.innerHTML += cont
        }
    }
}

//