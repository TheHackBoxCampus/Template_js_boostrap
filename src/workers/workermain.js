let workerMain = { 
    render_about: (title, about_text) => {
        let content = `
        <h4 class="fst-italic" >${title}</h4>
        <p class="mb-0">${about_text}</p>
        `
        return content 
    },
}

