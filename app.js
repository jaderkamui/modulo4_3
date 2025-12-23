const imagenPrincipal = document.querySelector('#imagen-principal');
const thumbnails = document.querySelectorAll('.thumbnail');
const contenedorPrincipal = document.querySelector('#imagen-principal-container');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Cambiar la imagen principal
        imagenPrincipal.src = thumbnail.src;

        // Eliminar pie de foto anterior si existe
        const pieAnterior = document.querySelector('#pie-de-foto');
        if (pieAnterior) {
            pieAnterior.remove();
        }

        // Crear nuevo pie de foto
        const pieDeFoto = document.createElement('p');
        pieDeFoto.id = 'pie-de-foto';
        pieDeFoto.textContent = thumbnail.alt;

        // Insertar el nuevo pie de foto
        contenedorPrincipal.appendChild(pieDeFoto);
    });
});
