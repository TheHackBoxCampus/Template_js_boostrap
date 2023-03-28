let workerTitle = {
	render_title(title, obj) {
		let content_title = `<p class="fs-3">${title}</p>`
		let content_date = `<a class="link-secondary" href="#">${obj}</a>`
		return [content_title, content_date]
	},  
}

self.addEventListener('message', e => {
	postMessage(workerTitle[`${e.data.module[0]}`](e.data.resources[0], e.data.resources[1])) 
})


