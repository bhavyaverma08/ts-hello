"use strict";
// function doSomething() {
//   for (var i = 0; i < 10; i++) {
//     console.log("This is " + i + "th iteration");
//   }
//   console.log("Finally ", i);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// doSomething();
// let count = 5;
// // count = "2"; // gives error as count is already declared as a number type variable
// let second_count; // type is : any
// second_count = "4";
// second_count = 2;
// second_count = true;
// let b: number;
// // b = "4" // Gives Error
// b = 3;
// let c: any;
// let d: number;
// let e: boolean;
// let f: string;
// let g: number[] = [1, 3, 5]; // array that stores only number elements
// let h: any[] = [1, "s", true]; // array that stores any mixed kind of elements
// //ENUM
// enum Color {
//   red = 0,
//   yellow = 1,
//   blue = 2,
// }
// let backgroundColor = Color.red;
// // Type Assertions
// // let message: string;
// // message = "abc";
// // let endsWithC = message.endsWith(c);
// // let message2;
// // message2 = "abc";
// // let endsWithC2 = (<string>message2).endsWith(c);
// // let alternativeWay = (message2 as string).endsWith(c);
// // Arrow functions
// const doLog = (message) => {
//   console.log("message==>", message);
// };
// doLog("This is my arrow function in TS");
// // Custom types
// //In Line annotations
// let drawPoint = (point: { x: number; y: number }) => {
//   //..
// };
// drawPoint({ x: 3, y: 4 });
// // Interfaces -
// // As it is custom it should be capitalised - Pascal naming convention
// interface Point {
//   p: number;
//   q: number;
// }
// let drawPoint2 = (point: Point) => {
//   //..
// };
// // drawPoint2({ p: 3, q: 4 });
// // In OOPs -  Cohesion - all the things that belong to one place should be grouped together
// // The functions and properties should be grouped using a class
// // # CLASS - Used to groups properties and functions that are highly related or grouped
// // Interface cannot include the algorithms / functions in an interface
// // This point here is a class
// class Point2 {
//   // fields
//   x: number;
//   y: number;
//   // Methods
//   draw() {
//     console.log("X is " + this.x + " & Y is " + this.y);
//     // ..
//   }
//   getDistance() {
//     console.log("X is " + this.x + " & Y is " + this.y);
//   }
// }
// // This point_variable is an instance of that class defined above resulting as an object
// let point_variable: Point2 = new Point2();
// point_variable.x = 12;
// point_variable.y = 14;
// point_variable.draw();
// // Constructor
// // This point here is a class
// class Point3 {
//   // fields
//   private x: number;
//   y: number;
//   constructor(x?: number, y?: number) {
//     // this.x = x;
//     // this.y = y;
//   }
//   // Methods
//   draw() {
//     console.log("X is " + this.x + " & Y is " + this.y);
//     // ..
//   }
// }
// // This point_variable is an instance of that class defined above resulting as an object
// let point3: Point3 = new Point3(3, 4);
// // point3.x = 3; // This will not work as x is private
// point3.draw();
// // Constructor
// // This point here is a class
// class Point4 {
//   // fields
//   private x: number;
//   y: number;
//   // constructor(private x: number, priavte y: number) {
//   // }
//   // Methods
//   draw() {
//     console.log("X is " + this.x + " & Y is " + this.y);
//     // ..
//   }
//   // IF I want to access a variable but not change it
//   getX() {
//     return this.x;
//   }
//   setX(value) {
//     if (value < 0) {
//       throw new Error("value cannot be less than 0");
//     }
//   }
//   // Properties
//   get X() {
//     return this.x;
//   }
//   set X(value) {
//     if (value < 0) {
//       throw new Error("value cannot be less than 0");
//     }
//   }
// }
// // This point_variable is an instance of that class defined above resulting as an object
// let point4 = new Point4();
// // point3.x = 3; // This will not work as x is private
// point4.draw();
// let x = point4.getX();
// point4.setX(10);
// let x2 = point4.X;
// point4.X = 12;
//MODULES
var point_1 = require("./point");
var point_module = new point_1.PointModule(1, 2);
point_module.drawLine();
var like_1 = require("./like");
var component = new like_1.LikeModule_solution(10, false);
component.onClick();
console.log("This is current count", component.current_likes);
