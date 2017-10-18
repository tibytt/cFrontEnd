import{Beagle} from "./Beagle" //para tenerlo en distintos archivos
class Perro{ // si no le queres hacer un new le poeds poner abstract antes de class
  public apellido: string;
  public  nombre: string;
  public patas: number ;
  constructor(nombre: string){
     
  }
  public ladrar(): string {
      return "GUAU";
  }
}
/*
let juan= new Persona("juan");
juan.apellido= "perez"; //si arriba pongo protected no puedo modificaro
*/
class Beagle extends Perro{ // viene de perro
constructor(nombre: string, public raza: string = "Beagle"){
super(nombre);
ladrar():string{
    return: "pepito"; // lo estoy pisando
}
}

let quinn = new Beagle("Quinn");
let ladrido: string= quinn.ladrar();
let dogo: Beagle =new Beagle("dogo");// lo puedo usar como tipo 