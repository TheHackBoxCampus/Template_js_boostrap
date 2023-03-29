let workerMain = { 
	render_about: (title, about_text, span_text) => {
		let content = `
        <h4 class="fst-italic" >${title}</h4>
        <p class="mb-0">${about_text}</p>
        `
		let info_span = span_text 
		return [content, info_span] 
	},
    
	render_info(format, arrObjs) {
		let content = ''

		for(let w = 0; w < arrObjs.length; w++){
			if(w < arrObjs.length - 1){
				content += `
                <span class="fs-2">${arrObjs[w].title}</span>
                <p class="fs-5">${arrObjs[w].des}</p>
                `
			} else {
				content += `
                <span class="fs-2">${arrObjs[w].title}</span>
                <p class="fs-5">${arrObjs[w].des}</p>
                <ul class="mt-3">${format.join('')}</ul>
                `
			}
		}
		return [content]
	}
}
self.addEventListener('message', e => {
	postMessage([
		workerMain[`${e.data.methods[0]}`](e.data.resources[0][0],e.data.resources[0][1],e.data.resources[0][2]),
		workerMain[`${e.data.methods[1]}`](e.data.resources[2], e.data.resources[1])
	])
})
