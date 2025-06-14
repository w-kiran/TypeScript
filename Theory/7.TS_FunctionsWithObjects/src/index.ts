// function with Obj
// 
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }
// 
// type GetDataType = (product: Product) => void;
// 
// const getData: GetDataType = (product) => {
//   console.log(product);
// };
// 
// const productOne: Product = {☺
//   name: "Macbook",
//   stock: 46,
//   price: 999999,
//   photo: "samplephotourl",
//   id: "asdnasjdasjkdas",
// };
// 
// getData(productOne);
// 
// Never Type
// 
// const errorHandler = (): never => {
//   throw new Error();
// };