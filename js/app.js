// Datos de productos
const productos = [
    { id: 1, nombre: "Producto A", precio: 10 },
    { id: 2, nombre: "Producto B", precio: 20 },
    { id: 3, nombre: "Producto C", precio: 30 }
];

// Carrito de compras
let carrito = [];

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
    actualizarIconoCarrito();
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

// Función para actualizar el contador en el icono del carrito
function actualizarIconoCarrito() {
    const count = carrito.length;
    document.getElementById("carrito-count").textContent = count;
}

// Función para mostrar u ocultar el carrito
function mostrarCarrito() {
    const carritoSection = document.getElementById("carrito");
    carritoSection.classList.toggle("visible");
}

// Función para cerrar el carrito al hacer clic en la X
function cerrarCarrito() {
    const carritoSection = document.getElementById("carrito");
    carritoSection.classList.remove("visible");
}

// Agregar evento a los botones de agregar al carrito
document.querySelectorAll(".agregar").forEach(button => {
    button.addEventListener("click", () => {
        const id = parseInt(button.closest(".producto").dataset.id);
        agregarAlCarrito(id);
    });
});

// Mostrar el carrito al hacer clic en el ícono del carrito
document.getElementById("carrito-icon").addEventListener("click", mostrarCarrito);

// Agregar el evento para cerrar el carrito cuando se haga clic en la X
document.getElementById("carrito-close").addEventListener("click", cerrarCarrito);
