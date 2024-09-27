import { modeloAlumnos } from "../models/alumnos.controller.js";

modeloAlumnos.create({
    name:"Edwin",
    apepat: "Sedano",
    edad: 21
});


export const test = ()=>{
    console.log("Se manda llamar el controlador")
}