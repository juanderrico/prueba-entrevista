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
    var nombre=document.getElementById("input-nombre");
    var documento = document.getElementById("input-dni");
    var dni= parseInt(documento.value);
      baseDeDatos.push(new Persona(nombre,dni));
  }
