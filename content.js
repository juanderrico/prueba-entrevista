class Persona{
  constructor(n,d){
    this.nombre=n;
    this.dni=d;
  }

}

var boton= document.getElementById('boton-agregar');
boton.addEventListener('click',crearPerfil);
var baseDeDatos=[];

  function crearPerfil(){
    var nombre=document.getElementById("input-nombre").value;
    var dni = document.getElementById("input-dni").value;
      baseDeDatos.push(new Persona(nombre,dni));
  }
