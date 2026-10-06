# Informe de Cambios - api-materias

## Resumen de Modificaciones Realizadas

1. **Corrección del Punto de Entrada (`package.json`)**:
   - Se ajustó el script de inicio y desarrollo para que apunte correctamente al archivo principal del servidor Express.

2. **Estructuración y Configuración de `app.js`**:
   - Se configuró la inicialización de Express y el uso de middleware para procesar JSON (`app.use(express.json());`).
   - Se integró el enrutador de materias bajo el prefijo correcto (`/api/v1/materias`).
   - Se estableció la escucha del servidor en el puerto 3000 utilizando `app.listen`.

3. **Verificación de Endpoints**:
   - Se validó el funcionamiento local del servidor para permitir las peticiones orientadas a la consulta de eventos por materia (`GET /api/v1/materias/:id/eventos`).
