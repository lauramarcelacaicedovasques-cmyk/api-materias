


/**
 * Busca todas las tareas asociadas a una materia y a un usuario específico.
 * @param {string|number} materiaId - ID de la materia.
 * @param {string|number} userId - ID del usuario.
 * @returns {Promise<Array>} Registros de las tareas encontradas.
 */
export async function findTareasByMateriaId(materiaId, userId) {
    // Ejemplo de consulta a la base de datos (ajústala si tu proyecto usa otro método u ORM)
    const query = `SELECT * FROM tareas WHERE materia_id = ? AND user_id = ?`;
    const [rows] = await pool.query(query, [materiaId, userId]);
    return rows;
}
