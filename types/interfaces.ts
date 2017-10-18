interface INombrable{
 nombre: string;



}
class Persona implements INombrable{
    nombre: string;


saludar(): string{
    return "hola, soy" + this.nombre;
}
}

function saludar(n: INombrable): void{
    alert(n.saludar());
}


let quinn ={
    nombre: "Quinn"
};
