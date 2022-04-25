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

      crearLinea(baseDeDatos[baseDeDatos.length-1]);

  }

function eliminarPerfil(index){

  var holder=document.getElementById("holder");
  var linea=document.getElementById("linea"+index);
  baseDeDatos.splice(index);
  holder.removeChild(linea);

}
function editarPerfil(index){
  var linea=document.getElementById("linea"+index);
  var parrafo= linea.firstChild;
  var nombre=document.getElementById("input-nombre").value;
  var dni = document.getElementById("input-dni").value;
  parrafo.innerText="Nombre: "+nombre+"--------- DNI: "+dni
}

function crearLinea(datos){
  var index= baseDeDatos.indexOf(datos);

  var holder=document.getElementById("holder");
  var div1= document.createElement("div");
  holder.appendChild(div1);
  div1.classList.add("linea")
  div1.setAttribute("id","linea"+ index);


  var parrafo=document.createElement("p");
  parrafo.classList.add("datos")
  div1.appendChild(parrafo);

  var div2= document.createElement("div");
  div1.appendChild(div2);

  var botonEditar= document.createElement("button");
  div2.appendChild(botonEditar);
  botonEditar.classList.add("editar-boton")

  var imagenEditar= document.createElement("img");
    imagenEditar.classList.add("editar-imagen")
  botonEditar.appendChild(imagenEditar);
  imagenEditar.src="editar-icono.png";

  var botonEliminar= document.createElement("button");
  botonEliminar.classList.add("eliminar-boton")
  div2.appendChild(botonEliminar);


  var imagenEliminar= document.createElement("img");
  imagenEliminar.classList.add("eliminar-imagen")
  botonEliminar.appendChild(imagenEliminar)
  imagenEliminar.src="eliminar-icono.png";

parrafo.innerText="Nombre: "+datos.nombre+"--------- DNI: "+datos.dni

var eliminar= document.getElementsByClassName('eliminar-boton');

eliminar[index].addEventListener('click',function(){eliminarPerfil(index)})

var editar= document.getElementsByClassName('editar-boton');

editar[index].addEventListener('click',function(){editarPerfil(index)})


}

function cargarDatos(){
  for(var i=0;i<baseDeDatos.length;i++){
    var p= "linea" + i;
    crearLinea(baseDeDatos[i]);
  }
}
cargarDatos();
