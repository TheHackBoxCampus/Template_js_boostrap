let workerAside = { 
	render_aside(datas) {
		let link = datas.links.map(link => `<li><a href='#'>${link}<a></li>`)
		let social = `<li><a href=${datas.social[0].github}>Github<a></li>`
        
		let content_aside = `
            <h4 class='fst-italic'>${datas.title}</h4>
            <ol class='list-unstyled mb-0'>${link.join('')}</ol>
        ` 
		let content_social_aside = `
            <h4 class='fst-italic'>${datas.social[0].subtitle}</h4>
            <ol class='list-unstyled mb-0'>${social}</ol>
        `      
		return [content_aside, content_social_aside]
	}
}

self.addEventListener('message', e => {
	postMessage(workerAside[`${e.data.module}`](e.data.resources))
})