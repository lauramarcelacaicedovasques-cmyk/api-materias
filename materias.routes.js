import { Router } from "express";
import { getTareasMateria } from "../controllers/materias.controller.js";

const router = Router();


router.get("/:id/tareas", getTareasMateria);

export default router;
