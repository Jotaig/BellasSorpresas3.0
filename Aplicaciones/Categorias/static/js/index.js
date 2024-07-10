
const url = 'https://jsonplaceholder.typicode.com/users';
const tableBody = document.getElementById('data');
const messageTableBody = document.getElementById('data-message');

document.addEventListener('DOMContentLoaded', function() {

    obtenerUsuariosYPoblarTablas();
});

async function obtenerUsuariosYPoblarTablas() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const usuarios = await fetch(url).then(res => res.json());
        poblarTablaDeUsuarios(usuarios);
        poblarTablaDeMensajes(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        mostrarPaginaDeError();
    }
}

function poblarTablaDeUsuarios(usuarios) {
    const cuerpoTabla = document.getElementById('data');
    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.name;

        const celdaEmail = document.createElement('td');
        celdaEmail.innerHTML = `<a href="mailto:${usuario.email}">${usuario.email}</a>`;

        const celdaEstadoPedido = document.createElement('td');
        celdaEstadoPedido.textContent = "En camino";

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEmail);
        fila.appendChild(celdaEstadoPedido);

        cuerpoTabla.appendChild(fila);
    });
}

function poblarTablaDeMensajes(usuarios) {
    const cuerpoTablaMensajes = document.getElementById('data-message');
    usuarios.forEach(usuario => {
        const filaMensaje = document.createElement('tr');

        const celdaNombreMensaje = document.createElement('td');
        celdaNombreMensaje.textContent = usuario.name;

        const celdaMensaje = document.createElement('td');
        celdaMensaje.textContent = `El pedido va hacia ${usuario.name}`;

        filaMensaje.appendChild(celdaNombreMensaje);
        filaMensaje.appendChild(celdaMensaje);

        cuerpoTablaMensajes.appendChild(filaMensaje);
    });
}

function mostrarPaginaDeError() {
    const divError = document.createElement('div');
    divError.textContent = 'Error al cargar los datos de los usuarios.';
    document.body.appendChild(divError);
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()




const nombre = document.getElementById("name")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const pais = document.getElementById("pais")
const ciudad = document.getElementById("ciudad")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const successMessage = document.getElementById("success-message")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\. -]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let regexTelefono = /^[0-9]+$/

    if (nombre.value.length < 3) {
        warnings += 'El Nombre no es valido.<br>'
        entrar = true
    }
    if (!regexTelefono.test(telefono.value)) {
        warnings += 'El Numero de telefono no es valido.<br>'
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es valido.<br>'
        entrar = true
    }
    if (pais.value.length < 3) {
        warnings += 'El pais no es valido.<br>'
        entrar = true
    }
    if (ciudad.value.length < 3) {
        warnings += 'La ciudad no es valida.<br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
        successMessage.style.display = 'none';
    } else {
        parrafo.innerHTML = "";
        successMessage.innerHTML = "Se han agregado todos los campos correctamente.";
        successMessage.style.display = 'block';
    }
})

const carrito = document.getElementById("carrito"),
    listaProductos = document.getElementById("lista_producto"),
    contenedorCarrito = document.querySelector('.buy-card' .lista_de_compra),
    vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

registrarEventsListeners()

function registrarEventsListeners(){
    listaProductos.addEventListener('click', agregarProducto);
}

function agregarProducto(){
    console.log("Agregando Producto")
}