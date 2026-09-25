const { Router } = require('express');
const router = Router();

let materias = [
    { id: '1', nombre: 'Matemáticas', creditos: 4 },
    { id: '2', nombre: 'Programación', creditos: 3 }
];

const listMaterias = (req, res) => {
    res.json(materias);
};

const getMateria = (req, res) => {
    const { id } = req.params;
    const materia = materias.find(m => m.id === id);
    if (!materia) return res.status(404).json({ mensaje: "Materia no encontrada" });
    res.json(materia);
};

const createMateria = (req, res) => {
    const { id, nombre, creditos } = req.body;
    const nuevaMateria = { id, nombre, creditos };
    materias.push(nuevaMateria);
    res.status(201).json(nuevaMateria);
};

const replaceMateria = (req, res) => {
    const { id } = req.params;
    const index = materias.findIndex(m => m.id === id);
    if (index === -1) return res.status(404).json({ mensaje: "Materia no encontrada" });
    
    materias[index] = { id, ...req.body };
    res.json(materias[index]);
};

const updateMateria = (req, res) => {
    const { id } = req.params;
    const materia = materias.find(m => m.id === id);
    if (!materia) return res.status(404).json({ mensaje: "Materia no encontrada" });

    Object.assign(materia, req.body);
    res.json(materia);
};

const deleteMateria = (req, res) => {
    const { id } = req.params;
    const index = materias.findIndex(m => m.id === id);
    if (index === -1) return res.status(404).json({ mensaje: "Materia no encontrada" });

    const materiaEliminada = materias.splice(index, 1);
    res.json(materiaEliminada);
};

router.get("/", listMaterias);
router.get("/:id", getMateria);
router.post("/", createMateria);
router.put("/:id", replaceMateria);
router.patch("/:id", updateMateria);
router.delete("/:id", deleteMateria);

module.exports = router;