// Generics

// const func = <T>(n: T): T => {

//   return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ans = func<Person>(person1);

// const func = <T, U>(n: T, o: U): { n:T, o:U } => {
//   return { n, o };
// };

// const ans = func<number,string>(20,"Lol");

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "abhi",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "abhi",
//   age: 109,
//   email: "asd@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);

// type Person = {
//   name: string;
//   age: number;
// };

// const users: Person[] = [
//   {
//     name: "abhi",
//     age: 109,
//   },
//   {
//     name: "Nahar",
//     age: 109,
//   },
//   {
//     name: "Levi",
//     age: 52,
//   },

//   {
//     name: "Random",
//     age: 2,
//   },
// ];

// const filterByPeoples = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };

// const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
// const filteredPeopleByAge = filterByPeoples(users, "age", 109);
// console.log(filteredPeopleByAge);