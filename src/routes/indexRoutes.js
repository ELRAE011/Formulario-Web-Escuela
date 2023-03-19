import { request, Router } from "express";
import {
  eliminarAlumno,
  estatusAlumno,
  getActualizarAlumno,
  ingresarAlumno,
  postActualizarAlumno,
  renderAlumno,
  renderListaAlumno,
} from "../controllers/alumnoController";
import {
  eliminarAsignatura,
  estatusAsignatura,
  getActualizarAsignatura,
  postActualizarAsignatura,
  renderAsignatura,
  renderListaAsignatura,
  ingresarAsignatura,
} from "../controllers/asignaturaController";
import {
  eliminarProfesor,
  estatusProfesor,
  getActualizarProfesor,
  ingresarProfesor,
  postActualizarProfesor,
  renderListaProfesor,
  renderProfesor,
} from "../controllers/profesorController";
import Alumnos from "../models/alumnos";
import Asignaturas from "../models/asignaturas";
import Profesor from "../models/Profesor";
const router = Router();

//---------------------------PAGINAS-------------------------------------------------
//Alumno
router.get("/", renderAlumno);
//Asignatura
router.get("/asignarutaAgregar", renderAsignatura);
//Profesor
router.get("/agregarProfesor", renderProfesor);
//ListaAlumnos
router.get("/listaAlumno", renderListaAlumno);
//ListaAsignatura
router.get("/listaAsignatura", renderListaAsignatura);
//ListaProfesores
router.get("/listaProfesor", renderListaProfesor);
//-----------------------------GUARDAR DATOS------------------------------------------
//Ingresar Alumno
router.post("/Alumnos/Agregar", ingresarAlumno);
//Ingresar Asignatura
router.post("/Asignatura/Agregar", ingresarAsignatura);
//Ingresar Profesor
router.post("/Profesor/Agregar", ingresarProfesor);
//-----------------------------ACTUALIZAR DATOS---------------------------------------
//Actualizar Asignatura
router.get("/editarAsignatura/:id", getActualizarAsignatura);
router.post("/editarAsignatura/:id", postActualizarAsignatura);
//Eliminar Asignatura
router.get("/borrarAsignatura/:id", eliminarAsignatura);
//Estatus Asignatura
router.get("/estatusAsignatura/:id", estatusAsignatura);
//Actualizar Alumno
router.get("/editarAlumno/:id", getActualizarAlumno);
router.post("/editarAlumno/:id", postActualizarAlumno);
//Eliminar Alumno
router.get("/borrarAlumno/:id", eliminarAlumno);
//Estatus Asignatura
router.get("/estatusAlumno/:id", estatusAlumno);
//Actualizar Profesor
router.get("/editarProfesor/:id", getActualizarProfesor);
router.post("/editarProfesor/:id", postActualizarProfesor);
//Eliminar Profesor
router.get("/borrarProfesor/:id", eliminarProfesor);
//Estatus Profesor
router.get("/estatusProfesor/:id", estatusProfesor);

export default router;