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
});