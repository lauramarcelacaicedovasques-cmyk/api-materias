import * as materiasService from "../services/materias.service.js";
import { sendSuccess } from "../utils/api-response.js"; 

/**
 * Controlador para obtener las tareas de una materia dado su ID y el USERID.
 * @param {Object} request - Objeto de la petición HTTP.
 * @param {Object} response - Objeto de la respuesta HTTP.
 * @param {Function} next - Función para manejar errores.
 */
export async function getTareasMateria(request, response, next) {
    try {
        const materiaId = request.params.id; 
        const userId = request.userId;       
        
        const tareas = await materiasService.getTareasByMateriaId(materiaId, userId);
        
        return sendSuccess(response, { data: tareas });
    } catch (error) {
        return next(error);
    }
}
