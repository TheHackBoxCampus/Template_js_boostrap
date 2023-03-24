export default {
   data: [
    {title: {
        hipo: 'Hipótesis de terrorismo',
        national: 'Nacionalidades de las personas a bordo del vuelo 370'
    },
    des: `El ministro malasio de Transportes estuvo investigando y anunció el inicio de una investigación sobre terrorismo, teoría nacida a partir de los dos pasajeros que embarcaron con pasaportes robados. El FBI inició a su vez una investigación en la misma dirección. Según un experto en terrorismo consultado por NBC, es muy extraño que dos pasajeros con los pasaportes robados se encuentren en el mismo vuelo.Además, estos dos pasajeros habrían reservado sus pasajes a la vez.Después de que varias agencias iniciaran investigaciones sobre un posible acto terrorista, as autoridades afirmaron estar investigando cuatro posibles casos de identidad sospechosa a bordo del aparato,no habiéndose encontrado relación con el terrorismo en el caso de los dos iraníes que viajaban con pasaportes robados`,
    crew: [
        {members:[130,38,10,7,6,5,4,4,4,4]},
        {members:[0,12,0,0,0,0,0,0,0,0,0]}
    ]
}], 
    acm(arr){
        let ac = arr.reduce((a, i) => a + i)
        arr.push(ac)
    },

    render_section(pays) {
        let content = ''
        let co = [...pays] 
        let pay_str = ''
        let section = document.querySelector('#article_section')

        for(let w = 0; w < 2; ++w) {
            this.acm(this.data[0].crew[w].members)
        }

        co.push('Total: ')

        for(let x = 0; x < 1; x++){
           for (let y = 0; y < this.data[0].crew[x].members.length; y++){
            co.forEach(pay => pay_str += `
                <tr>
                    <td>${pay}</td><td>${this.data[0].crew[x].members[y++]}</td>
                    <td>${this.data[0].crew[x + 1].members[y]}</td>
                </tr>`)
           }
           break
        }

        this.data.forEach(obj => {
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
        section.insertAdjacentHTML('beforeend', content);
    }
}