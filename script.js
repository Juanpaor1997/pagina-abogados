document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("message");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            message.textContent = "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.";
            form.reset();
        });
    }

    mostrarSentenciasRecientes();
    mostrarSentenciasPopulares();
    mostrarSentenciasMasLeidas();
});

const sentencias = [
    { titulo: "Sentencia C-355 de 2006", contenido: "Despenalización del aborto en tres casos específicos...", fecha: "2006-05-10", importancia: "Alta", lecturas: 1500 },
    { titulo: "Sentencia T-760 de 2008", contenido: "Reforma al sistema de salud en Colombia...", fecha: "2008-07-31", importancia: "Alta", lecturas: 1200 },
    { titulo: "Sentencia SU-377 de 2014", contenido: "Derecho a la salud como derecho fundamental...", fecha: "2014-05-15", importancia: "Alta", lecturas: 900 },
    { titulo: "Sentencia C-041 de 2020", contenido: "Regulación del uso de cannabis medicinal...", fecha: "2020-02-05", importancia: "Media", lecturas: 800 },
    { titulo: "Sentencia T-622 de 2016", contenido: "Reconocimiento del río Atrato como sujeto de derechos...", fecha: "2016-11-10", importancia: "Alta", lecturas: 1100 }
];

function buscarSentencias() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    sentencias.forEach(sentencia => {
        if (sentencia.titulo.toLowerCase().includes(searchQuery) || sentencia.contenido.toLowerCase().includes(searchQuery)) {
            const sentenciaDiv = document.createElement("div");
            sentenciaDiv.classList.add("sentencia");
            sentenciaDiv.innerHTML = `
                <h3>${sentencia.titulo}</h3>
                <p>${sentencia.contenido}</p>
                <p><strong>Fecha:</strong> ${sentencia.fecha}</p>
                <p><strong>Importancia:</strong> ${sentencia.importancia}</p>
                <p><strong>Lecturas:</strong> ${sentencia.lecturas}</p>
            `;
            resultadosDiv.appendChild(sentenciaDiv);
        }
    });
}

function mostrarSentenciasRecientes() {
    const recientesDiv = document.getElementById("recientes");
    recientesDiv.innerHTML = "";

    const sentenciasRecientes = sentencias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 3);
    sentenciasRecientes.forEach(sentencia => {
        const sentenciaDiv = document.createElement("div");
        sentenciaDiv.classList.add("sentencia");
        sentenciaDiv.innerHTML = `
            <h3>${sentencia.titulo}</h3>
            <p>${sentencia.contenido}</p>
            <p><strong>Fecha:</strong> ${sentencia.fecha}</p>
            <p><strong>Importancia:</strong> ${sentencia.importancia}</p>
            <p><strong>Lecturas:</strong> ${sentencia.lecturas}</p>
        `;
        recientesDiv.appendChild(sentenciaDiv);
    });
}

function mostrarSentenciasPopulares() {
    const popularesDiv = document.getElementById("populares");
    popularesDiv.innerHTML = "";

    const sentenciasPopulares = sentencias.filter(sentencia => sentencia.importancia === "Alta").slice(0, 3);
    sentenciasPopulares.forEach(sentencia => {
        const sentenciaDiv = document.createElement("div");
        sentenciaDiv.classList.add("sentencia");
        sentenciaDiv.innerHTML = `
            <h3>${sentencia.titulo}</h3>
            <p>${sentencia.contenido}</p>
            <p><strong>Fecha:</strong> ${sentencia.fecha}</p>
            <p><strong>Importancia:</strong> ${sentencia.importancia}</p>
            <p><strong>Lecturas:</strong> ${sentencia.lecturas}</p>
        `;
        popularesDiv.appendChild(sentenciaDiv);
    });
}

function mostrarSentenciasMasLeidas() {
    const masLeidasDiv = document.getElementById("mas-leidas");
    masLeidasDiv.innerHTML = "";

    const sentenciasMasLeidas = sentencias.sort((a, b) => b.lecturas - a.lecturas).slice(0, 3);
    sentenciasMasLeidas.forEach(sentencia => {
        const sentenciaDiv = document.createElement("div");
        sentenciaDiv.classList.add("sentencia");
        sentenciaDiv.innerHTML = `
            <h3>${sentencia.titulo}</h3>
            <p>${sentencia.contenido}</p>
            <p><strong>Fecha:</strong> ${sentencia.fecha}</p>
            <p><strong>Importancia:</strong> ${sentencia.importancia}</p>
            <p><strong>Lecturas:</strong> ${sentencia.lecturas}</p>
        `;
        masLeidasDiv.appendChild(sentenciaDiv);
    });
}