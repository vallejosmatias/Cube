<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombreApellido = $_POST["nombre-apellido"];
    $telefono = $_POST["telefono"];
    $mail = $_POST["mail"];
    $opciones = $_POST["select"];
    $descripcion = $_POST["descripcion"];

    // Configurar el destinatario del correo electrónico
    $destinatario = "cubedesign.contacto@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo formulario de contacto";

    // Contenido del correo
    $mensaje = "Nombre y Apellido: " . $nombreApellido . "\n";
    $mensaje .= "Número telefónico: " . $telefono . "\n";
    $mensaje .= "Correo electrónico: " . $mail . "\n";
    $mensaje .= "Opciones elegidas: " . $opciones . "\n";
    $mensaje .= "Descripción: " . $descripcion;

    // Encabezados adicionales
    $headers = "From: $mail" . "\r\n" .
               "Reply-To: $mail" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar el correo electrónico
    $enviado = mail($destinatario, $asunto, $mensaje, $headers);

    // Verificar si el correo electrónico se envió correctamente
    if ($enviado) {
        echo "Gracias por ponerte en contacto. Tu mensaje ha sido enviado.";
    } else {
        echo "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>