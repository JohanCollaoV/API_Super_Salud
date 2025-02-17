# API-Prestadores_Salud_
# API-Prestadores_Salud

## Descripción del Proyecto

Este proyecto es una API diseñada para integrarse con el sistema **PsicoAgendaAPP**. Su función principal es validar que un prestador de servicios, específicamente un psicólogo, sea válido y esté registrado en la base de datos de una API que simula la superintendencia de salud.

## Características principales:

- **Validación de Prestadores:** La API verifica la validez de los prestadores de servicios de salud (psicólogos) consultando una base de datos simulada que replica los registros de la superintendencia de salud.

- **Recuperación Automática de Datos:** La API no solo valida el Rut del prestador, sino que también recupera automáticamente información relevante como el número de registro, sexo, nombres, apellidos, fecha de nacimiento, nacionalidad, universidad, y otros detalles importantes del profesional. Además, se obtiene un historial de antecedentes del profesional, incluyendo clase de antecedente, fecha y resolución, entre otros.

- **Integración con PsicoAgendaAPP:** Esta API está diseñada para ser utilizada por el sistema PsicoAgendaAPP, garantizando que los psicólogos registrados en la plataforma cumplen con los requisitos necesarios y están oficialmente reconocidos.

- **Manejo de Errores:** La API está equipada para manejar errores comunes, como la falta de un Rut en la solicitud o cuando el Rut no está asociado a un prestador válido, proporcionando mensajes claros al usuario.

- **Simulación de Entidad Reguladora:** La base de datos utilizada por esta API simula el comportamiento y los registros de la superintendencia de salud, ofreciendo un entorno de pruebas confiable para el sistema.

## Ejemplo de Uso:

Cuando se realiza una consulta con un Rut específico, la API devuelve un objeto JSON que contiene todos los datos relevantes del prestador, incluyendo su información personal y los antecedentes asociados. Si el Rut no es válido o no se encuentra en la base de datos, la API responde con un mensaje de error adecuado.
