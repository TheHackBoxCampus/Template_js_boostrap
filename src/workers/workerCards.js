let workerCard = {  
	render_cards(features) {
		let card_1_content 
		let card_2_content 
		let cont = ''

		for(let card in features){
			cont =  `
            <div class="col p-4 d-flex flex-column position-static gap-1 bg-light border border-none">
            <strong class="d-inline-block text-primary">${features[card].title_Card}</strong>
            <h3 class="mb-0">${features[card].subtitle}</h3>
            <p class="card-text mb-auto">${features[card].des}</p>
            <a href="#" class="stretched-link">${features[card].btn}</a>
          </div>
          <img class="col-4 col-md-5" src=${features[card].url}>
         `
			features[card].id == 1 ? card_1_content = cont : card_2_content = cont 
		}
		return [card_1_content,card_2_content]
	}
}


self.addEventListener('message',e =>  {
	postMessage(workerCard[`${e.data.module}`](e.data.resources))
})