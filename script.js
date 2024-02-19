document.addEventListener("DOMContentLoaded", function() {
    // Array de degradados neon cyberpunk futuristas
    var gradients = [
        "linear-gradient(to bottom right, #00FF99, #00FF00)", // Verde neon
        "linear-gradient(to bottom right, #FFA500, #FF4500)", // Llama neon
        "linear-gradient(to bottom right, #9933FF, #FF00FF)", // Morado neon
        "linear-gradient(to bottom right, #40E0D0, #20B2AA)", // Turquesa neon
        "linear-gradient(to bottom right, #FF007F, #FF1493)"  // Fucsia neon
        // Puedes agregar más degradados según sea necesario
    ];

    // Selecciona un degradado aleatorio
    var randomIndex = Math.floor(Math.random() * gradients.length);
    var randomGradient = gradients[randomIndex];

    // Establece el degradado aleatorio como fondo de toda la página
    document.body.style.backgroundImage = randomGradient;
});

document.addEventListener("DOMContentLoaded", function() {
    // Array de colores para el texto
    var textColors = [
        "#00FF00", // Verde neon
        "#FFA500", // Llama neon
        "#9933FF", // Morado neon
        "#40E0D0", // Turquesa neon
        "#FF007F"  // Fucsia neon
        // Puedes agregar más colores según sea necesario
    ];

    // Obtener todos los elementos de texto
    var textElements = document.querySelectorAll('.texto-con-color');

    // Asignar un color aleatorio a cada texto al pasar el mouse sobre él
    textElements.forEach(function(textElement) {
        textElement.addEventListener('mouseover', function() {
            var randomIndex = Math.floor(Math.random() * textColors.length);
            var randomColor = textColors[randomIndex];
            textElement.style.color = randomColor;
        });
    });
});