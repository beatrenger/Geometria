export namespace numeros{


    export  class Racional {
        n: number; // numerador
        d:number; // denominador

        // sobre carga del constructor
        constructor();
        constructor(n:number ,d:number);
        constructor(n?:number,d?:number){
          //undefined es valor de nada
          if(n==undefined&&d==undefined){
            this.n=0;
             this.d=1;
          }else{
            this.n=n;
            this.d=d;
          }
        }

    static    move(distanceinMeters:number = 0){
          console.log(`Animal moved ${distanceinMeters}`);
        }
        static suma(r1: Racional, r2:Racional):Racional{
      var  rr:Racional;
      var nr,dr:number;
      nr = (r1.n*r2.d)+(r1.d*r2.n);
      dr = r1.d*r2.d;
        rr = new Racional(nr,dr);
          return rr;
          }
          static resta(r1: Racional, r2:Racional):Racional{
        var  rr:Racional;
        var nr,dr:number;
        nr = (r1.n*r2.d)-(r1.d*r2.n);
        dr = r1.d*r2.d;
          rr = new Racional(nr,dr);
            return rr;
            }
// hacer las funciones de resta, mult, div
// hacer algorimo maximo comun eculaid
      static reducion(rad:Racional):Racional{
        var r1,r2:number;
        r1 = rad.n;
        r2 = rad.d;
           if( r1 < 1 || r2 < 1 ){
              console.log('not possible');
           }
           var r:number;
           do{
             r = r1 % r2;
            r1 = r2;
            r2 = r;
           }while ( r2 != 0);

           rad.n = rad.n/r1;
           rad.d = rad.d/r1;

           return rad;
          }


        disp():void{
          console.log(this.n+" / "+this.d);
        }
        dispHtml():void{
         document.writeln(this.n+"/"+this.d+"<br>")
        }
      }

}
