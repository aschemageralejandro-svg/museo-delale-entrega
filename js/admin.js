/**
 * ========================================
 * PANEL DE ADMINISTRACIÓN - GESTIÓN DE OBRAS
 * ========================================
 */

/**
 * FUNCIÓN PARA MOSTRAR NOTIFICACIONES TOAST
 */
function mostrarToast(mensaje, tipo = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * FUNCIÓN PARA MOSTRAR MODAL DE CONFIRMACIÓN
 */
function mostrarConfirmacion(mensaje) {
    return new Promise((resolve) => {
        const modalHTML = `
            <div id="modal-confirmacion" class="modal-overlay">
                <div class="modal-confirmacion-content">
                    <div class="modal-confirmacion-icono">⚠️</div>
                    <h3 class="modal-confirmacion-titulo">Confirmar acción</h3>
                    <p class="modal-confirmacion-mensaje">${mensaje}</p>
                    <div class="modal-confirmacion-botones">
                        <button class="btn-cancelar" id="btn-cancelar">Cancelar</button>
                        <button class="btn-confirmar" id="btn-confirmar">Eliminar</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const modal = document.getElementById('modal-confirmacion');
        const btnConfirmar = document.getElementById('btn-confirmar');
        const btnCancelar = document.getElementById('btn-cancelar');

        btnConfirmar.addEventListener('click', () => {
            modal.remove();
            resolve(true);
        });

        btnCancelar.addEventListener('click', () => {
            modal.remove();
            resolve(false);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                resolve(false);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const seccionLogin = document.getElementById('seccion-login');
    const seccionAdmin = document.getElementById('seccion-admin');
    const loginForm = document.getElementById('loginForm');
    const btnLogout = document.getElementById('btnLogout');
    const mensajeError = document.getElementById('mensaje-error');
    const formAgregarObra = document.getElementById('form-agregar-obra');

    function actualizarVista() {
        const estaLogueado = localStorage.getItem('usuarioLogueado') === 'true';

        if (estaLogueado) {
            seccionLogin.style.display = 'none';
            seccionAdmin.style.display = 'block';

            if (btnLogout) {
                btnLogout.style.display = 'inline-block';
            }

            renderizarListaObras();

        } else {
            seccionLogin.style.display = 'block';
            seccionAdmin.style.display = 'none';

            if (btnLogout) {
                btnLogout.style.display = 'none';
            }

            if (document.getElementById('username')) {
                document.getElementById('username').value = '';
            }
            if (document.getElementById('password')) {
                document.getElementById('password').value = '';
            }

            if (mensajeError) {
                mensajeError.style.display = 'none';
            }
        }
    }

    function renderizarListaObras() {
        const listaObrasAdmin = document.getElementById('lista-obras-admin');

        if (!listaObrasAdmin) return;

        const obrasGuardadas = localStorage.getItem('obras');

        if (!obrasGuardadas) {
            listaObrasAdmin.innerHTML = '<p>No hay obras cargadas.</p>';
            return;
        }

        const obras = JSON.parse(obrasGuardadas);
        listaObrasAdmin.innerHTML = '';

        obras.forEach((obra) => {
            const obraDiv = document.createElement('div');
            obraDiv.className = 'admin-obra-item';
            obraDiv.innerHTML = `
                <div class="admin-obra-info">
                    <strong>${obra.titulo}</strong> - ${obra.artista} (${obra.anio})
                </div>
                <div class="admin-obra-botones">
                    <button class="btn-editar" data-id="${obra.id}">Editar</button>
                    <button class="btn-eliminar" data-id="${obra.id}">Eliminar</button>
                </div>
            `;
            listaObrasAdmin.appendChild(obraDiv);
        });

        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', eliminarObra);
        });

        document.querySelectorAll('.btn-editar').forEach(btn => {
            btn.addEventListener('click', editarObra);
        });
    }

    async function eliminarObra(e) {
        const id = parseInt(e.target.dataset.id);

        const confirmado = await mostrarConfirmacion('¿Estás seguro de que querés eliminar esta obra?');

        if (!confirmado) {
            return;
        }

        const obrasGuardadas = localStorage.getItem('obras');
        if (!obrasGuardadas) return;

        let obras = JSON.parse(obrasGuardadas);
        obras = obras.filter(obra => obra.id !== id);

        localStorage.setItem('obras', JSON.stringify(obras));
        renderizarListaObras();
        mostrarToast('Obra eliminada con éxito', 'success');
    }

    function editarObra(e) {
        const id = parseInt(e.target.dataset.id);

        const obrasGuardadas = localStorage.getItem('obras');
        if (!obrasGuardadas) return;

        const obras = JSON.parse(obrasGuardadas);
        const obra = obras.find(o => o.id === id);

        if (!obra) return;

        document.getElementById('titulo').value = obra.titulo;
        document.getElementById('artista').value = obra.artista;
        document.getElementById('anio').value = obra.anio;
        document.getElementById('tecnica').value = obra.tecnica;
        document.getElementById('dimensiones').value = obra.dimensiones;
        document.getElementById('imagen').value = obra.imagen;
        document.getElementById('descripcion').value = obra.descripcion;

        const form = document.getElementById('form-agregar-obra');
        form.dataset.editandoId = id;

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Actualizar Obra';

        form.scrollIntoView({ behavior: 'smooth' });
    }

    actualizarVista();

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const usuario = document.getElementById('username').value;
            const contrasenia = document.getElementById('password').value;

            if (usuario === 'admin' && contrasenia === '1234') {
                localStorage.setItem('usuarioLogueado', 'true');
                actualizarVista();
            } else {
                if (mensajeError) {
                    mensajeError.style.display = 'block';
                }
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioLogueado');
            actualizarVista();
        });
    }

    if (formAgregarObra) {
        formAgregarObra.addEventListener('submit', (e) => {
            e.preventDefault();

            const editandoId = formAgregarObra.dataset.editandoId;

            const datosObra = {
                titulo: document.getElementById('titulo').value,
                artista: document.getElementById('artista').value,
                anio: document.getElementById('anio').value,
                tecnica: document.getElementById('tecnica').value,
                dimensiones: document.getElementById('dimensiones').value,
                imagen: document.getElementById('imagen').value,
                descripcion: document.getElementById('descripcion').value
            };

            const obrasGuardadas = localStorage.getItem('obras');
            let obras = obrasGuardadas ? JSON.parse(obrasGuardadas) : [];

            if (editandoId) {
                const index = obras.findIndex(o => o.id === parseInt(editandoId));

                if (index !== -1) {
                    obras[index] = { ...obras[index], ...datosObra };
                    mostrarToast('¡Obra actualizada con éxito!', 'success');
                }

                delete formAgregarObra.dataset.editandoId;

                const submitBtn = formAgregarObra.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Guardar Obra';

            } else {
                const nuevaObra = {
                    id: Date.now(),
                    ...datosObra
                };

                obras.push(nuevaObra);
                mostrarToast('¡Obra agregada con éxito!', 'success');
            }

            localStorage.setItem('obras', JSON.stringify(obras));
            formAgregarObra.reset();
            renderizarListaObras();
        });
    }
});
