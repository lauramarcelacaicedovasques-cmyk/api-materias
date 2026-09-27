



 * @param {string|number} 
 * @param {string|number} 
 * @returns {Promise<Array>}
export async function findTareasByMateriaId(materiaId, userId) {
    
    const query = `SELECT * FROM tareas WHERE materia_id = ? AND user_id = ?`;
    const [rows] = await pool.query(query, [materiaId, userId]);
    return rows;
}
