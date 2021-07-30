var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click" , dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = 300;

var lienzo = d.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, yi2, xf2, xi, yf, xi2, yf2;
  var espacio = ancho / lineas;

  dibujarLinea ("blue", 1, 1, 1, ancho);
  dibujarLinea ("blue", 1, ancho, ancho, ancho);
  dibujarLinea ("blue", ancho, 1, 1, 1);
  dibujarLinea ("blue", ancho, ancho, ancho, 1);

  for(l = 0; l<lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yi2 = espacio * l;
    xf2 = ancho - (espacio * l);
    xi = espacio * l;
    yf = espacio * (l + 1);
    xi2 = ancho - (espacio * l)
    yf2 = espacio * (l + 1)

    dibujarLinea("blue", 0, yi,xf,ancho)
    dibujarLinea("blue", ancho, yi2,xf2,ancho)
    dibujarLinea("blue", xi, 0,ancho,yf)
    dibujarLinea("blue", xi2, 0,0,yf2)

    console.log("linea" + l);
  }
}
