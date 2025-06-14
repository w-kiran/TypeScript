// Type Assertion

// const btn = document.getElementById("btn")!;  //not null
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;

// const img = document.querySelector("img")!
// img.src

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body")!;
//   const value = Number(myinput.value);

//   h2.textContent = String(value + 20);
//   body.append(h2);
// };




// Keyof & Index Signature

// interface Person {
//     // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Abhi",
//   email: "abhI@gmail.com",
// };

// let key="name";

// myobj[key as keyof typeof myobj]

// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person ): string => {
//   return myobj[key];
// };

// getData("name")