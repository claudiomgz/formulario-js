

var attempt = 3; 
// Variable que cuenta los intentos.
// Debajo de la función Se ejecuta al hacer clic en el botón de inicio de sesión.

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Formget" && password == "formget#123") {
    alert("Login completado con éxito!");
    window.location = "success.html"; // Redirecciona a la otra página.
    return false;
  } else {
    attempt--; // Decrementa en uno.
    alert("You have left " + attempt + " attempt;");
    // Desactiva los campos después de 3 intentos.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
