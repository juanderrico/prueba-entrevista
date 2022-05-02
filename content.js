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
    var p=document.getElementById("error")
    p.innerText=""
    var nombre=document.getElementById("input-nombre");
    var dni = document.getElementById("input-dni");

    for(nuevoPerfil of baseDeDatos){
      if(dni.value==nuevoPerfil.dni){
        return errorEnDni()
      }
    else if(dni.value==""){
      return alert("No se ha ingresado DNI")
    }}

      baseDeDatos.push(new Persona(nombre.value,dni.value));
      crearLinea(baseDeDatos[baseDeDatos.length-1]);
      nombre.value=""
      dni.value=""

  }
function errorEnDni(){
  var p=document.getElementById("error")

  p.innerText="DNI ya ha sido ingresado"
}

function eliminarPerfil(dni){
  var index;
  for(find of baseDeDatos){
    if(dni==find.dni){
    index= baseDeDatos.indexOf(find)
  }}
  var holder=document.getElementById("holder");
  var linea=document.getElementById("linea"+index);
  baseDeDatos.splice(index,1);
  holder.removeChild(linea);
  for(var i=0;i<baseDeDatos.length;i++){
    var cambio=document.getElementsByClassName("linea")
    cambio[i].setAttribute("id","linea"+i)
  }

}
function editarPerfil(dni){
  var index;
  for(find of baseDeDatos){
    if(dni==find.dni){
    index= baseDeDatos.indexOf(find)
  }}



  var linea=document.getElementById("linea"+index);
  var parrafo= linea.firstChild;

  parrafo.innerText= "Nombre:"
  var inputNombre= document.createElement("input");
  inputNombre.setAttribute("type","text")
  inputNombre.setAttribute("id","editar-nombre");
  inputNombre.setAttribute("value",baseDeDatos[index].nombre);
  parrafo.appendChild(inputNombre);

  var div= document.createElement("div");
  parrafo.appendChild(div);
  div.setAttribute("id","div-editar")
  div.innerText="DNI:"

  var inputDni= document.createElement("input");
  inputDni.setAttribute("type","number");
  inputDni.setAttribute("id","editar-dni");
  inputDni.setAttribute("value",baseDeDatos[index].dni);
  div.appendChild(inputDni);

  var done= document.createElement("input")
inputDni.setAttribute("type","number");
  done.setAttribute("Class","input-button");
  done.setAttribute("id","done-button");
  done.setAttribute("Value","Hecho");
  div.appendChild(done);
  done.addEventListener("click",function(){modificarPerfil(index)})

inputNombre.setAttribute("Class","edit-inputs");
inputDni.setAttribute("Class","edit-inputs");

}


function modificarPerfil(index){
  var nombre=document.getElementById("editar-nombre")
  var dni=document.getElementById("editar-dni")
  var linea=document.getElementById("linea"+index);
  var parrafo=linea.firstChild;
  var div=document.getElementById("div-editar")
  parrafo.removeChild(div);
  parrafo.removeChild(nombre);
  baseDeDatos.splice(index,1,new Persona(nombre.value,dni.value));
parrafo.innerText="Nombre: "+nombre.value+"--------- DNI: "+dni.value

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
  parrafo.setAttribute("id","datos");

  var div2= document.createElement("div");
  div1.appendChild(div2);

  var botonEditar= document.createElement("button");
  div2.appendChild(botonEditar);
  botonEditar.classList.add("editar-boton")

  var imagenEditar= document.createElement("img");
    imagenEditar.classList.add("editar-imagen")
  botonEditar.appendChild(imagenEditar);
  imagenEditar.src="./editar-icono.png";

  var botonEliminar= document.createElement("button");
  botonEliminar.classList.add("eliminar-boton")
  div2.appendChild(botonEliminar);


  var imagenEliminar= document.createElement("img");
  imagenEliminar.classList.add("eliminar-imagen")
  botonEliminar.appendChild(imagenEliminar)
  imagenEliminar.src="./eliminar-icono.png";

parrafo.innerText="Nombre: "+datos.nombre+"--------- DNI: "+datos.dni

var eliminar= document.getElementsByClassName('eliminar-boton');

eliminar[index].addEventListener('click',function(){eliminarPerfil(datos.dni)})

var editar= document.getElementsByClassName('editar-boton');

editar[index].addEventListener('click',function(){editarPerfil(datos.dni)})


}

function cargarDatos(){
  for(var i=0;i<baseDeDatos.length;i++){

    crearLinea(baseDeDatos[i]);
  }
}
cargarDatos();
