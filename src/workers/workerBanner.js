let workerBanner = {
	render_banner(ob){
		let co = []
		let content = ''  
        
		for(let el in ob) if(el != 'date') {co.push(ob[el])}
		co.forEach(text => content += `<span>${text}</span><br>`) 
		return content
	}   
}

self.addEventListener('message', e => {
	postMessage(workerBanner[`${e.data.module}`](e.data.info))
})