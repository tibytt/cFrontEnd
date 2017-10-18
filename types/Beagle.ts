import{Perro} from "./Perro"; // importa perro desde..
export class Beagle extends Perro{ // viene de perro
    constructor(nombre: string, public raza: string = "Beagle"){
    super(nombre);
    ladrar():string{
        return: "pepito"; // lo estoy pisando
    }
    }