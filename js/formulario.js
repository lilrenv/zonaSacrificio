document.getElementById("formulario").addEventListener("submit", function(event) {
	event.preventDefault();
	// Aquí puedes agregar la lógica para enviar el formulario mediante AJAX o mediante un formulario tradicional
	// Por ahora, solo redirigimos a la página principal
	window.location.href = "index.html";
});