import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: false,
      trim: true,
    },
    paterno: {
      type: String,
      required: true,
      trim: true,
    },
    materno: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNac: {
      type:Date,
      required:true,
    },
    sexo: {
      type:String,
      required:true,
      trim:true
    },
    celular: {
      type:Number,
      required:true,
      trim:true
    },
    direccion: {
      type:String,
      required:true,
      trim:true
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

export default model("Alumnos", alumnoEsquema);
