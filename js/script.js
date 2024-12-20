// Datos de los usuarios
const validUsers = {
    user1: "password1",
    user2: "password2"
};

// Manejar el envío del formulario de login
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar las credenciales
    if (validUsers[username] && validUsers[username] === password) {
        // Redirigir a la página app.html
        window.location.href = "app.html";
    } else {
        // Mostrar error si las credenciales son incorrectas
        document.getElementById("login-error").style.display = "block";
    }
});
