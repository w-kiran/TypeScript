// type FuncType = (n: number, m: number, l?: number) => number;
// 
// // Optional Parameter
// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;
//   return n * m * l;
// };
// func(25, 23);


// // Default Parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// }; 
// func(25, 23);


// // Rest Operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// func(25, 23, 34, 6, 67, 8, 9);

// function lol(n:number):number{
//     return 45
// }

// function with Obj

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: Product = {☺
//   name: "Macbook",
//   stock: 46,
//   price: 999999,
//   photo: "samplephotourl",
//   id: "asdnasjdasjkdas",
// };

// getData(productOne);

// Never Type

// const errorHandler = (): never => {
//   throw new Error();
// };