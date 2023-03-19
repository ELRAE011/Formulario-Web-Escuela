import Asignaturas from "../models/asignaturas";

//Pagina Asignatura
export const renderAsignatura = async (req, res) => {
  res.render("agregarAsignatura");
};
//Lista Asignatura
export const renderListaAsignatura = async (req, res) => {
  const asignaturas = await Asignaturas.find().lean();
  res.render("listaAsignaturas", { asignaturas: asignaturas });
};
//Ingresar Asignatura
export const ingresarAsignatura = async (req, res) => {
  try {
    const asignatura = Asignaturas(req.body);
    await asignatura.save();
    res.redirect("/asignarutaAgregar");
  } catch (error) {
    console.log(error.message);
  }
};
//Obtiene Actualizar Asignatura
export const getActualizarAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.findById(req.params.id).lean();
    res.render("editarAsignatura", { asignatura });
  } catch (error) {
    console.log(error.message);
  }
};
//Manda Actualizar Asignatura
export const postActualizarAsignatura = async (req, res) => {
  try {
    const { id } = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);
    res.redirect("/listaAsignatura");
  } catch (error) {
    console.log(error.message);
  }
};
//Eliminar Asignatura
export const eliminarAsignatura = async (req, res) => {
  try {
    const { id } = req.params;
    await Asignaturas.findByIdAndDelete(id);
    res.redirect("/listaAsignatura");
  } catch (error) {
    console.log(error.message);
  }
};
//Estatus Asignatura
export const estatusAsignatura = async (req, res) => {
  try {
    const { id } = req.params;
    const asignatura = await Asignaturas.findById(id);
    //Opcion esta en Model
    asignatura.opcion = !asignatura.opcion;
    await asignatura.save();
    res.redirect("/listaAsignatura");
  } catch (error) {
    console.log(error.message);
  }
};
