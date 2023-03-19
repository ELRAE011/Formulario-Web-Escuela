import Alumnos from "../models/alumnos";

//Pagina Alumno
export const renderAlumno = async (req, res) => {
  res.render("Alumno");
};
//Lista Alumno
export const renderListaAlumno = async (req, res) => {
  const alumnos = await Alumnos.find().lean();
  res.render("listaAlumnos", { alumnos: alumnos });
};
//Ingresar Alumno
export const ingresarAlumno = async (req, res) => {
  try {
    const alumno = Alumnos(req.body);
    await alumno.save();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};
//Actualizar Alumno
export const getActualizarAlumno = async (req, res) => {
  try {
    const alumno = await Alumnos.findById(req.params.id).lean();
    res.render("editarAlumno", { alumno });
  } catch (error) {
    console.log(error.message);
  }
};
export const postActualizarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);
    res.redirect("/listaAlumno");
  } catch (error) {
    console.log(error.message);
  }
};
//Eliminar asignatura
export const eliminarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id);
    res.redirect("/listaAlumno");
  } catch (error) {
    console.log(error.message);
  }
};
//Estatus Alumno
export const estatusAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumnos.findById(id);
    //Opcion esta en Model
    alumno.opcion = !alumno.opcion;
    await alumno.save();
    res.redirect("/listaAlumno");
  } catch (error) {
    console.log(error.message);
  }
};
