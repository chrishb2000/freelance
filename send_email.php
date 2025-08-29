<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Recoger y sanear los datos del formulario
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // 2. Validar los datos
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Si hay un error de validación, redirigir con un mensaje de error.
        header("Location: contacto.html?status=error");
        exit;
    }

    // 3. Configurar el correo
    $recipient = "chrishb2000@gmail.com";
    $subject = "Nuevo mensaje de contacto de: $name";
    
    // 4. Construir el cuerpo del correo
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // 5. Construir las cabeceras del correo
    $email_headers = "From: $name <$email>";
    $email_headers .= "\r\nReply-To: $email";

    // 6. Enviar el correo
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Si el correo se envía con éxito, redirigir a la página de gracias.
        header("Location: gracias.html");
        exit;
    } else {
        // Si hay un error en el envío, redirigir con un mensaje de error.
        header("Location: contacto.html?status=error_send");
        exit;
    }

} else {
    // Si alguien intenta acceder al script directamente, lo redirigimos.
    header("Location: contacto.html");
    exit;
}
?>