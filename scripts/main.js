document.addEventListener('DOMContentLoaded', () => {
    // Código JavaScript para añadir interactividad
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulario enviado');
    });
});
