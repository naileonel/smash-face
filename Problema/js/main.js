var numeroAlAzar;

var imagenes = [
  "Alma.JPG", 
  "Anita.JPG",
  "Analy.JPG", 
  "Areli.JPG",
  "Beatriz.JPG",
  "Claudia.JPG",
  "Daniela.JPG", 
  "Elisa.JPG",
  "Evelyn.JPG",     
  "Gabriela.JPG",
  "Tayde.JPG",
  "Grissel.JPG", 
  "Guadalupe.JPG",
  "Johana.JPG", 
  "Joyce.JPG",
  "Ofelia.JPG",    
  "Sharon.JPG",
  "Heredia.JPG",     
  "Karen.JPG",
  "Monica.JPG",  
  "Karla.JPG",
  "Leslie.JPG", 
  "Mishel.JPG",
  "Milca.JPG",  
  "Naibit.JPG",
  "Nayeli.JPG",        
  "Nelly.JPG",
  "Reyna.JPG",        
  "Adriana.JPG",
  "DJRuth.JPG",             
  "Ruth.JPG",
  "Sandia.JPG",           
  "Sandra.JPG",
  "Vianey.JPG",  
  "Zazil.JPG"
];

var nombres = [ "Alma", "Anita", "Analy", "Areli", "Beatriz", "Claudia", 
"Daniela", "Elisa", "Evelyn", "Gabriela","Tayde", "Grissel", "Guadalupe", "Johana", 
"Joyce", "Ofelia", "Heredia", "Karen", "Monica", "Leslie", 
"Mishel", "Milca", "Naibit", "Nayeli", "Nelly", "Reyna", "Adriana", "DJRuth",
 "Ruth", "Sandia", "Sandra", "Vianey", "Zazil"];


var indiceActual = 0;
var puntos = 0;
var intentos = 0;


function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;

  if (tamanoArreglo > 0 ){
      numeroAlAzar = enteroRandomEnRango(0,tamanoArreglo);
      var imagen = 'fotos/' + imagenes[numeroAlAzar];
      $('#imagenPersona').attr('src', imagen);
  }else{
    alert("Triunfaste!!!!!")
  }
};

  $(document).ready(function(){

  $('#btnRevisar').click(function(){
    var nombre = $('#inputNombre').val();
    console.log("El usuario escribio:" + nombre);

    var nombreAAdivinar = nombres[numeroAlAzar];
    console.log("El nombre correcto es:" + nombreAAdivinar);

    if( nombre == nombreAAdivinar){
      nombres.splice(numeroAlAzar,1);
      imagenes.splice(numeroAlAzar,1);

      desplegarNuevaJugada();
    }else{
      alert('Error')
    }

    
  });

desplegarNuevaJugada();

});
