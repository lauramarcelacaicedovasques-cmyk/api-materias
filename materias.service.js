import * as materiasRepository from "../repositories/materias.repository.js";
import { HttpError } from "../utils/http.error.js";


 * @async
 * @function listMaterias
 * @param {string|number} userId - Identificador único del usuario.
 * @param {Object} [filters] - Filtros de paginación.
 * @returns {Promise<Object>} Lista de materias y metadatos.
 */
export async function listMaterias(userId, filters) {
    const { materias, total } = await materiasRepository.findAllByUserId(userId, filters);
    return {
        data: materias,
        meta: {
            page: filters.page,
            limit: filters.limit,
            total,
            pages: Math.ceil(total / filters.limit)
        }
    };
}

