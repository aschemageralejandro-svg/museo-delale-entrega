/**
 * ========================================
 * RENDERIZADO DE OBRAS - PÁGINA COLECCIÓN
 * ========================================
 * Este archivo lee las obras desde localStorage y las muestra en la página
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // PASO 1: Obtener referencia al contenedor donde se mostrarán las obras
    const contenedorObras = document.getElementById('contenedor-obras');

    // PASO 2: Leer las obras guardadas en localStorage
    const obrasGuardadas = localStorage.getItem('obras');

    // PASO 3: Verificar que existan obras Y que exista el contenedor
    if (obrasGuardadas && contenedorObras) {

        // Convertir el texto JSON a un array de objetos
        const obras = JSON.parse(obrasGuardadas);

        // Limpiar el contenedor (por si acaso hubiera algo)
        contenedorObras.innerHTML = '';

        // PASO 4: Recorrer cada obra y crear su tarjeta HTML
        obras.forEach(obra => {

            // Crear el HTML de la tarjeta usando template literals
            const obraHTML = `
                <div class="obra-item">
                    <div class="obra-tit">
                        ${obra.titulo}
                    </div>
                    <div class="obra-img">
                        <img class="imagen-obra" src="${obra.imagen}" alt="Imagen de ${obra.titulo}">
                    </div>
                    <div class="obra-datos">
                        <span class="artista">${obra.artista}</span>
                        <span class="año">${obra.anio}</span>
                        <div class="tecnica">
                            ${obra.tecnica}
                        </div>
                        <div class="dimensiones">
                            ${obra.dimensiones}
                        </div>
                        <div class="descripcion-obra">
                            ${obra.descripcion}
                        </div>
                        <div class="botonera-obra">
                            <button class="btn-ver" data-obra-id="${obra.id}">Ver Detalles</button>
                        </div>
                    </div>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            contenedorObras.innerHTML += obraHTML;
        });

        // PASO 5: Agregar event listeners a todos los botones "Ver Detalles"
        document.querySelectorAll('.btn-ver').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const obraId = parseInt(e.target.dataset.obraId);
                const obra = obras.find(o => o.id === obraId);
                if (obra) {
                    mostrarModal(obra);
                }
            });
        });

    } else {
        // Si no hay obras o no existe el contenedor, mostrar mensaje en consola
        console.log('⚠️ No hay obras para mostrar o no se encontró el contenedor.');
    }
});

/**
 * ========================================
 * FUNCIÓN PARA MOSTRAR MODAL CON DETALLES
 * ========================================
 */
function mostrarModal(obra) {
    // Crear el HTML del modal
    const modalHTML = `
        <div id="modal-obra" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body">
                    <div class="modal-imagen">
                        <img src="${obra.imagen}" alt="${obra.titulo}">
                    </div>
                    <div class="modal-info">
                        <h2>${obra.titulo}</h2>
                        <p class="modal-artista"><strong>Artista:</strong> ${obra.artista}</p>
                        <p class="modal-anio"><strong>Año:</strong> ${obra.anio}</p>
                        <p class="modal-tecnica"><strong>Técnica:</strong> ${obra.tecnica}</p>
                        <p class="modal-dimensiones"><strong>Dimensiones:</strong> ${obra.dimensiones}</p>
                        <p class="modal-descripcion">${obra.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Agregar el modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Obtener referencias al modal y botón de cerrar
    const modal = document.getElementById('modal-obra');
    const btnCerrar = modal.querySelector('.modal-close');

    // Cerrar al hacer click en la X
    btnCerrar.addEventListener('click', () => {
        modal.remove();
    });

    // Cerrar al hacer click fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function cerrarConEsc(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', cerrarConEsc);
        }
    });
}
