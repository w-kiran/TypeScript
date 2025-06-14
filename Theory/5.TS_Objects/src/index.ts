// const obj : {
//     height: number;
//     weight: number;
//     gender: boolean;
// } ={
//     height: 13,
//     weight: 13,
//     gender: true,
// }



// type Obj ={
//     height: number;
//     weight: number;
//     gender?: boolean; //optional
// }
//
// const obj : Obj = {
//     height: 13,
//     weight: 13,
//     gender: true,
// }
//
// const obj1 : Obj = {
//     height: 13,
//     weight: 13,
// }



// interface Obj {
//     height: number;
//     weight: number;
//     gender?: boolean; //optional
// }
//
// interface NewObj extends Obj {
//     scolar: boolean
// }
//
// const obj2 : NewObj = {
//     height:344,
//     weight:533,
//     scolar:true,
// }



// interface Obj {
//     height: number;
//     weight: number;
//     gender?: boolean; //optional
// }
// 
//      interface NewObj extends Obj {
//          scolar: boolean
//          func:(n:number,m:number)=>void
//      }
// 
//     //  OR
// 
//      type FuncType= (n:number,m:number)=>void
//      interface NewObj extends Obj {
//          scolar: boolean
//          func:FuncType
//      }
// 
// const obj3 : NewObj = {
//     height:344,
//     weight:533,
//     scolar:true,
//     func:(n,m)=>{
//         console.log(n*m);
//     }
// }
// obj3.func(20,10);



