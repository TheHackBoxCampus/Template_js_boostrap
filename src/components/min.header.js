export default {
    title:"MH370",
    details: {
        date: "8/03/2014",
        banner: "El avión que desapareció",
        des: "La misteriosa desaparición del avión de Malaysia Airlines que despegó el 8 de marzo de 2014 del aeropuerto de Kuala Lumpur con destino a Beijing, China, y nunca más se supo nada de él.A nueve años de la última vez que la torre de control tuvo contacto con la aeronave, son más las dudas que hay sobre el caso que las certezas."
    },
    title_consume() {
        let t = document.querySelector("#title__container");   
        let e = document.querySelector("#date__container");         
        t.innerHTML += this.title;
        e.innerHTML += this.details.date; 
    },
    chapters(obj) {
        let co = []
        let div = document.querySelector("#banner"); 
        let content = ""; 
        
        for(let el in obj) if(el != "date") co.push(obj[el])
        co.forEach(text => {
           content = `<span>${text}</span><br>`
           div.insertAdjacentHTML("beforeend", content); 
        }); 
    }
}   
