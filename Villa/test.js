var vp = document.getElementById("areaDeDibujo");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverLobo);

var xLobo = 100;
var yLobo = 100;

function moverLobo(evento)
{
var movimiento = 64;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
switch (evento.keyCode)
 {
  case teclas.UP:
    yLobo = yLobo - movimiento;
    dibujar();
    break;

  case teclas.DOWN:
    yLobo = yLobo + movimiento;
    dibujar();
    break;

  case teclas.RIGHT:
    xLobo = xLobo + movimiento;
    dibujar();
    break;

  case teclas.LEFT:
    xLobo = xLobo - movimiento;
    dibujar();
    break;

  default:
  console.log("otra tecla");
  }
}


var fondo =
{
  url: "tile.png",
  cargaOk: false
}
var vaca =
{
  url: "vaca.png",
  cargaOk: false
};
var cerdo =
{
  url: "cerdo.png",
  cargaOk: false
}
var pollo =
{
  url: "pollo.png",
  cargaOk: false
}
var lobo =
{
  url: "lobo.png",
  cargaOk: false,
  posX: 225,
  poxY: 225
}

var cantidad = aleatorio(1,5);

fondo.objeto = new Image ();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image;
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image;
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image;
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

lobo.objeto = new Image;
lobo.objeto.src = lobo.url;
lobo.objeto.addEventListener("load", cargarLobo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}
function cargarLobo()
{
  lobo.cargaOk = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOk)
  {
    for (var v = 0; v < cantidad; v++)
     {
       var x = aleatorio(0, 5);
       var y = aleatorio(0, 5);
       var x = x * 70;
       var y = y * 70;
       papel.drawImage(vaca.objeto, x, y);
    }
  }
  if(cerdo.cargaOk)
  {
    for (var c = 0; c < cantidad; c++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(cerdo.objeto, x, y);
    }
  }
  if (pollo.cargaOk)
  {
    for (var p = 0; p < cantidad; p++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 60;
      var y = y * 60;
    papel.drawImage(pollo.objeto, x, y);
    }
  }
  if (lobo.cargaOk)
  papel.drawImage(lobo.objeto, xLobo, yLobo);

}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) +1;
  return resultado;
}
