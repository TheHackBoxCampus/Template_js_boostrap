let workerSection = { 
	render_section(arr_pays, data) {
		let content = ''
		let co = [...arr_pays] 
		let pay_str = ''

		co.push('Total: ')

		for(let x = 0; x < 1; x++){
			for (let y = 0; y < data[0].crew[x].members.length; y++){
				co.forEach(pay => pay_str += `
                <tr>
                    <td>${pay}</td><td>${data[0].crew[x].members[y++]}</td>
                    <td>${data[0].crew[x + 1].members[y]}</td>
                </tr>`)
			}
			break
		}

		data.forEach(obj => {
			content += `
            <span class="fs-2">${obj.title.hipo}</span>
            <p class="fs-5 mt-3">${obj.des}</p>
            <span class="fs-2">${obj.title.national}</span>
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th>Nacionalidad</th>
                        <th>Pasajeros</th>
                        <th>Tripulacion</th>
                    </tr>
                </thead>
                <tbody>
                  ${pay_str}
                </tbody>
            </table>
            `
		})
		return content
	}
}

self.addEventListener('message', e => {
	postMessage(workerSection[`${e.data.module}`](e.data.resources[1], e.data.resources[0]))
}) 