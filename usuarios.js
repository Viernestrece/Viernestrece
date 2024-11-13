/// Base de datos simulada de usuarios
const usuarios = [
    { name: "Monserrat", email: "monsert@abog.com", password: "contraseña1" },
    { name: "Ed", email: "ed2@abog.com", password: "contraseña2" },
    { name: "Victor", email: "victor@abog.com", password: "contraseña3" },
    { name: "Isra", email: "isra4@abog.com", password: "contraseña4" }
];

// Función de registro
function register(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página
    
    // Obtener valores de los campos de formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario ya existe
    const usuarioExistente = usuarios.find(user => user.email === email);

    if (usuarioExistente) {
        alert("El correo electrónico ya está registrado.");
    } else {
        // Agregar el nuevo usuario a la base de datos simulada
        usuarios.push({ name: name, email: email, password: password });
        alert("Registro exitoso. Ahora puedes iniciar sesión.");

        // Llamar a la función para exportar a Excel
        exportarExcel(usuarios);

        // Limpiar los campos del formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

// Función para exportar datos a Excel
function exportarExcel(data) {
    // Crea una nueva hoja de trabajo
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    // Genera el archivo Excel
    XLSX.writeFile(workbook, "usuarios.xlsx");
}

// Función de inicio de sesión
function login(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario existe en la base de datos
    const usuarioValido = usuarios.find(user => user.email === email && user.password === password);

    if (usuarioValido) {
        window.location.href = "index.html"; // Redirigir a index.html
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
}
