import Profesor from "../models/Profesor";
//Pagina Profesor
export const renderProfesor = async (req, res) => {
  res.render("agregarProfesor");
};
//Lista Profesor
export const renderListaProfesor = async (req, res) => {
  const profesor = await Profesor.find().lean();
  res.render("ListaProfesor", { profesor: profesor });
};
//Ingresar Profesor
export const ingresarProfesor = async (req, res) => {
  try {
    const profesor = Profesor(req.body);
    await profesor.save();
    res.redirect("/agregarProfesor");
  } catch (error) {
    console.log(error.message);
  }
};
//Actualizar Profesor
export const getActualizarProfesor = async (req, res) => {
  try {
    const profesor = await Profesor.findById(req.params.id).lean();
    res.render("editarProfesor", { profesor });
  } catch (error) {
    console.log(error.message);
  }
};
export const postActualizarProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    await Profesor.findByIdAndUpdate(id, req.body);
    res.redirect("/ListaProfesor");
  } catch (error) {
    console.log(error.message);
  }
};
//Eliminar Profesor
export const eliminarProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    await Profesor.findByIdAndDelete(id);
    res.redirect("/ListaProfesor");
  } catch (error) {
    console.log(error.message);
  }
};
export const estatusProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.findById(id);
    //Opcion esta en Model
    profesor.opcion = !profesor.opcion;
    await profesor.save();
    res.redirect("/listaProfesor");
  } catch (error) {
    console.log(error.message);
  }
};
