export class Perro{ // si no le queres hacer un new le poeds poner abstract antes de class
    public apellido: string;
    public  nombre: string;
    public patas: number ;
    constructor(nombre: string){
       
    }
    public ladrar(): string {
        return "GUAU";
    }
  }