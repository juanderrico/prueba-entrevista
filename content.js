class Persona{
  constructor(n,d){
    this.nombre=n;
    this.dni=d;
  }

}

var boton= document.getElementById('boton-agregar');
boton.addEventListener('click',crearPerfil);
var baseDeDatos=[];
baseDeDatos.push(new Persona("Juan", 40140041))
  function crearPerfil(){
    var nombre=document.getElementById("input-nombre").value;
    var dni = document.getElementById("input-dni").value;
      baseDeDatos.push(new Persona(nombre,dni));
  }
var parrafo= document.getElementById("datos");
parrafo.innerText = "Nombre: " + baseDeDatos[0].nombre +"  DNI: "+ baseDeDatos[0].dni;
