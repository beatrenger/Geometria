export namespace geometria{
   export class Punto {
     x:number;
     y:number;
     isInter:boolean;
     constructor(x:number,y:number){
       this.x = x;
       this.y = y;
     }
   }

   export class Recta {
      pa:Punto;
      pb:Punto;
      m:number;
      valorB:number;

  constructor(pa:Punto,pb:Punto){
        this.pa = pa;
        this.pb = pb;
        this.pendiente(this.pa,this.pb);
        this.b(this.pa,this.m);

      }

      static pendiente(rc1:Recta): number{
      var m:number;
      m = (rc1.pa.y - rc1.pb.y)/(rc1.pa.x - rc1.pb.y);
        return m;
      }
      protected b(pa:Punto, m:number): void{
        var c;
        c=  pa.y-(m*(pa.x))
        this.valorB = c;
      }
      protected pendiente(pa:Punto,pb:Punto):void{
          var m:number;
          m = (pa.y -pb.y)/(pa.x - pb.x)
          this.m = m;
      }
      static  interesctan (l1:Recta,l2:Recta): Punto{
          var p:Punto;

            var a1,b1,c1,a2,b2,c2:number;
              a1 = l1.pa.y - l1.pb.y;
              b1 = l1.pb.x - l1.pa.x;
              c1 = a1*l1.pb.x + b1*l1.pb.y;

              a2 = l2.pa.y - l2.pb.y;
              b2 = l2.pb.x - l2.pa.x;
              c2 = a2*l2.pb.x + b2*l2.pb.y;

              var det = a1*b2 - a2*b1;
              if (det == 0){
              p.isInter = false;
              }else {
                var x,y:number;
                x = (b2*c1 - b1*c2)/det;
                y = (a1*c2 - a2*c1)/det;
                  p = new Punto(x,y);
              p.isInter = true;
              }
              return p;
          }


    }

    export class Traingulo {
      l1:Recta;
      l2:Recta;
      l3:Recta;
      p1:Punto;
      p2:Punto;
      p3:Punto;
      triang:boolean;
      constructor(l1:Recta,l2:Recta,l3:Recta){
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;


      }

      static estriangulo(tri:Traingulo):void{
            var a,b,c :Recta;
            a = tri.l1;
            b = tri.l2;
            c = tri.l3;

            var p1,p2,p3:Punto;
            p1 = Recta.interesctan(a,b);
            p2 = Recta.interesctan(b,c);
            p3 = Recta.interesctan(c,a);
            if(p1.isInter == true && p2.isInter == true && p3.isInter == true  ){
                  tri.p1 = p1;
                  tri.p2 = p2;
                  tri.p3 = p3;
                  tri.triang = true;
            } else {
              tri.triang = false;
            }
      }

    }

}
