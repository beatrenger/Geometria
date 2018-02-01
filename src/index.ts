import  {geometria} from './recta';
class Saludos {

    saludo(): void {
      console.log('Hello world som ething');
      console.log('something else');
    }
}

// var s: Saludos;
//
// s = new Saludos();
//
// s.saludo();


var pn1,pn2,pn3,pn4,pn5,pn6 :geometria.Punto;

pn1 = new geometria.Punto(2,-3);
pn2 = new geometria.Punto(5,2);
pn3 = new geometria.Punto(-5,2);
pn4 = new geometria.Punto(-2,-2);
pn5 = new geometria.Punto(7,8);
pn6 = new geometria.Punto(2,6);

var rc1,rc2,rc3 : geometria.Recta;


rc1 = new geometria.Recta(pn1,pn2);
rc2 = new geometria.Recta(pn3,pn4);
rc3 = new geometria.Recta(pn5,pn6);




var triangulo : geometria.Traingulo;

triangulo = new geometria.Traingulo(rc1,rc2,rc3);

geometria.Traingulo.estriangulo(triangulo);

console.log(triangulo);
