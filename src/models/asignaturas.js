import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    asignatura: {
      type: String,
      required: true,
      trim: true,
    },
    creditos: {
      type: Number,
      required: true,
      trim: true
    },
    horas: {
      type: Number,
      required: true,
      trim: true
    },
    opcion: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Asignaturas", asignaturaEsquema);
