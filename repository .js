export async function findAllByUserId(userId) {
  const [rows] = await pool.execute(
    `SELECT
        r.id_recordatorio AS id,
        r.id_tarea AS tareaId,
        r.mensaje,
        r.fecha_hora AS fechaHora,
        r.canal,
        r.leido,
        r.created_at AS createdAt,
        r.updated_at AS updatedAt
     FROM recordatorio r
     JOIN tarea t ON r.id_tarea = t.id_tarea
     JOIN materia m ON t.id_materia = m.id_materia
     WHERE m.id_usuario = ?
     ORDER BY r.fecha_hora ASC`,
    [userId]
  );

  return rows.map(mapRecordatorio);
}
