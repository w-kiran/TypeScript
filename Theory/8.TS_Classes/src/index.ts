// // classes

// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }
//
//   get getMyHeight(): number {
//     return this.height;
//   }
//
//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }
//
// const abhi = new Player(100, 150, 23);
//
// console.log("Height", abhi.getMyHeight);
// abhi.changeHeight = 500;
// console.log("Height", abhi.getMyHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }
//
// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());


// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType, GiveId {
//   private id: string = String(Math.random() * 1000);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);

// ---------------------------------------------
