let workerNav = {
	render_paragraphs(chapters){
		let content = '' 
		for(let inf in chapters){
			content += `<a class="p-2 link-secondary" href="#">${chapters[inf]}</a>`
		}
		return content
	}
}

self.addEventListener('message', e => { 
	postMessage(workerNav[`${e.data.module}`](e.data.chapters))
})