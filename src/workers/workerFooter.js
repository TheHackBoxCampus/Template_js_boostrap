let workerFooter = {
	render_footer(data) {
		let content = `
            <span class="fs-4">${data.developer.name} <b class="text-secondary">${data.developer.role}<b><span>
            <p class="fs-3">${data.copyright}</p>
        `
		return content 
	}   
}

self.addEventListener('message', e => {
	postMessage(workerFooter.render_footer(e.data.resources))
})

