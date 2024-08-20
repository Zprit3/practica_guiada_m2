$(document).ready(function() {

  $("#boton-enviar").click(function() {
      console.log('Botón cliqueado');
      let nombre = $("#nombre").val();
      let email = $("#email").val();
      let mensaje = $("#mensaje").val();

      if (!nombre || !email || !mensaje) {
        showAlert("¡Error!", "Por favor, rellena todos los campos del formulario.", "danger");
        return;
      }

      $("#nombre-resumen").text(nombre);
      $("#email-resumen").text(email);
      $("#mensaje-resumen").text(mensaje);

      showAlert("¡Éxito!", "Formulario enviado correctamente.", "success");
  });

  function showAlert(title, message, type) {
      $(".alert").remove();
      let alert = `
          <div class="alert alert-${type} alert-dismissible fade show" role="alert">
              <strong>${title}</strong> ${message}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
    
      $(".alert-div").prepend(alert);

      setTimeout(function() {
          $(".alert").alert('close');
      }, 3000);
  }

});
