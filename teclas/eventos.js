var teclas = {
  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGHT : 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");
var x = 100;
var y = 100;


dibujarLinea("blue", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
var colorcito = "blue";
var movimiento = 3;
  switch (evento.keyCode)
  {
case teclas.UP:
 dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
y = y - movimiento;
break;
case teclas.DOWN:
 dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
y = y + movimiento;
break;
case teclas.LEFT:
 dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
x = x - movimiento;
break;
case teclas.RIGHT:
 dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
x = x + movimiento;
break;
  }
}
