export default {
    data: {
        developer: {
            name: "Miller Developer",
            role: "Campus"
        },
        copyright: "©Copyright"
    },

    render_footer() {
        let footer = document.querySelector("#footer");
        let content = `
            <span class="fs-4">${this.data.developer.name} <b class="text-secondary">${this.data.developer.role}<b><span>
            <p class="fs-3">${this.data.copyright}</p>
        `;
        footer.insertAdjacentHTML("beforeend", content);
    }
}