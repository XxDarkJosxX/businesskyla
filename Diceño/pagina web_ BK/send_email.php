<?php
// Configuraciones iniciales
header('Content-Type: application/json');

// Función para limpiar datos de entrada
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Inicializar respuesta
$response = [
    'success' => false,
    'message' => 'Error al procesar la solicitud.'
];

// Verificar si es una solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar campos requeridos
    if (
        isset($_POST['nombre']) && !empty($_POST['nombre']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['mensaje']) && !empty($_POST['mensaje'])
    ) {
        // Sanitizar datos de entrada
        $nombre = sanitizeInput($_POST['nombre']);
        $email = sanitizeInput($_POST['email']);
        $mensaje = sanitizeInput($_POST['mensaje']);
        
        // Validar formato de email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response['message'] = 'Por favor, proporciona un correo electrónico válido.';
            echo json_encode($response);
            exit;
        }
        
        // Configuración del correo
        $to = 'contacto@empresa.com'; // Cambia esto a tu dirección de correo real
        $subject = 'Nuevo mensaje de contacto desde el sitio web';
        
        // Cuerpo del correo
        $emailBody = "Has recibido un nuevo mensaje de contacto:\n\n";
        $emailBody .= "Nombre: $nombre\n";
        $emailBody .= "Email: $email\n";
        $emailBody .= "Mensaje:\n$mensaje\n";
        
        // Cabeceras del correo
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Intentar enviar el correo
        try {
            if (mail($to, $subject, $emailBody, $headers)) {
                $response['success'] = true;
                $response['message'] = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
            } else {
                $response['message'] = 'No se pudo enviar el mensaje. Por favor, intenta más tarde.';
            }
        } catch (Exception $e) {
            $response['message'] = 'Error al enviar el mensaje: ' . $e->getMessage();
        }
    } else {
        $response['message'] = 'Por favor, completa todos los campos requeridos.';
    }
} else {
    $response['message'] = 'Método de solicitud no válido.';
}

// Enviar respuesta como JSON
echo json_encode($response);
?>
