export default {
    datas: {
        title: "Véase también",
        links: ["Accidente en aviacion", 
                "misterios de la aviacion",
                "Desapariciones en aviacion",
                "Vuelo TC-48 de la FAA",
                "Vuelo 653 Malaysa",
                "Vuelo 2133 de Malaysa",
                "Vuelo 011 de SAETA", 
                "VUelo 007 de Korean Air",
                "Vuelo 17 de Malaysa",
                "Vuelo 447 de Air France",
                "Cosas interesantes de la aviacion"],
        social: [{
            subtitle: "Acerca de mi..",
            github: "https://github.com/TheHackBoxCampus"
        }]
    },
    
    render_aside() {
        let aside = document.querySelector("#aside");
        let aside_social = document.querySelector("#aside_developer");
        let link = this.datas.links.map(link => `<li><a href="#">${link}<a></li>`)
        let social = `<li><a href=${this.datas.social[0].github}>Github<a></li>`
        
        let content_aside = `
            <h4 class="fst-italic">${this.datas.title}</h4>
            <ol class="list-unstyled mb-0">${link.join("")}</ol>
        `; 

        let content_social_aside = `
            <h4 class="fst-italic">${this.datas.social[0].subtitle}</h4>
            <ol class="list-unstyled mb-0">${social}</ol>
        `

        aside.insertAdjacentHTML("beforeend", content_aside);
        aside_social.insertAdjacentHTML("beforeend", content_social_aside);
        
     }
}