import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
      app = " Xây dựng chương trình tính tổng"
      a:any;
      b:any;
      t:any;
      ngOnInit(){
        this.a=0;
        this.b=0;
      }
      ptt2(){
        if(this.a.b)
        {
          
        }
      }
      tinh(){
        this.t =Number.parseInt(this.a)+Number.parseInt(this.b);
      }
//   title = 'demo';
//   public tt;
//   public tong = 0;
//   public xau = '';
 

//   ngOnInit() {
//     let a = 4;
//     let b = 5;
//     let c = 6;
//     var thetich =new HH(a,b,c);
//     this.tt =  thetich.theTich();
    
//     var arrString: string[];
//     arrString = ['teo', 'ty', 'tun'];
//     console.log(arrString);

//     let list = [1, 2, 5, 10];
//     let t = 0;
//     for (var i in list) {
//       t += list[i];
//     }
//     this.tong = t;

//     let nt = (n) => {
//       let ok = true;
//       for (let i = 2; i < n - 1; ++i)
//         if (n % i == 0) {
//           ok = false;
//           break;
//         }
//       return ok;
//     }
//     let s = [3, 11, 5, 6, 10].filter(nt);
//     console.log(s);

//     let employeeName = 'Đỗ Việt Hoàng';
//     let employeeDept = 'Ba Vì - Hà Nội'
//     let employeeDesc2: string = `${employeeName} ${employeeDept}`;
//     this.xau = employeeDesc2;
//   }
// }
//   export class hcn {
//     protected a:number;
//     protected b:number;
//     constructor(a:number,b:number) {
//       this.a=a;
//       this.b=b;
//     }
//     public DienTich():number
//     {
//       return this.a*this.b;
//     }
//   }
//   export class HH extends hcn {
//     protected c;
//     constructor(a:number, b:number, c:number) {
//       super(a,b);
//       this.c=c;
//     }
//     public theTich():number{
//       return this.DienTich()*this.c;
    
    }
    
    
  
