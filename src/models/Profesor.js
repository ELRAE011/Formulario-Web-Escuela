import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    rfc:{
        type: String,
        required: true,
        trim:true
    },
    nombres: {
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
    fechaNacimiento: {
      type:Date,
      required:true,
    },
    direccion: {
      type:String,
      required:true,
      trim:true
    },
    celular: {
      type:Number,
      required:true,
      trim:true
    },
    profesion: {
      type:String,
      required:true,
      trim:true
    },
    numeroEmpleado: {
        type:Number,
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

export default model("Profesor", profesorEsquema);
