$(document).ready(function() {

    $("#boton-enviar").click(function() {
        console.log('boton cliqueado')
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();
  
      if (!nombre || !email || !mensaje) {
        showAlert("¡Error!", "Por favor, rellena todos los campos del formulario.");
        return;
      }
  
      $("#nombre-resumen").text(nombre);
      $("#email-resumen").text(email);
      $("#mensaje-resumen").text(mensaje);
  
      showAlert("¡Éxito!", "Tu mensaje se ha enviado correctamente.");
      console.log('Correcto')
    });
  
    function showAlert(title, message) {
        console.log('error')
      var alert = `<div class="alert alert-danger" role="alert">
                    ${title} ${message}
                  </div>`;
      $(".container").prepend(alert);
      setTimeout(function() {
        $(".alert").alert('close');
      }, 3000);
    }
  
  });