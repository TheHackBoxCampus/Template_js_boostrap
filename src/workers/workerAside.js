let workerAside = { 
	render_aside(datas) {
		let link = datas.links.map(link => `<li><a class="text-light text-decoration-none" href='#'>${link}<a></li>`)
		let social = `<li><a class="text-light text-decoration-none" href=${datas.social[0].github}>Github<a></li>`
        
		let content_aside = `
            <h4 class='fst-italic text-light'>${datas.title}</h4>
            <ol class='list-unstyled mb-0 text-light'>${link.join('')}</ol>
        ` 
		let content_social_aside = `
            <h4 class='fst-italic text-light'>${datas.social[0].subtitle}</h4>
            <ol class='list-unstyled mb-0'>${social}</ol>
        `      
		return [content_aside, content_social_aside]
	}
}

self.addEventListener('message', e => {
	postMessage(workerAside[`${e.data.module}`](e.data.resources))
})