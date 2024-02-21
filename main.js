function doSomething() {
    for (var i = 0; i < 10; i++) {
        console.log("This is " + i + "th iteration");
    }
    console.log("Finally ", i);
}
doSomething();
var count = 5;
// count = "2"; // gives error as count is already declared as a number type variable
var second_count; // type is : any
second_count = "4";
second_count = 2;
second_count = true;
var b;
// b = "4" // Gives Error
b = 3;
var c;
var d;
var e;
var f;
var g = [1, 3, 5]; // array that stores only number elements
var h = [1, "s", true]; // array that stores any mixed kind of elements
//ENUM
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var backgroundColor = Color.red;
// Type Assertions
// let message: string;
// message = "abc";
// let endsWithC = message.endsWith(c);
// let message2;
// message2 = "abc";
// let endsWithC2 = (<string>message2).endsWith(c);
// let alternativeWay = (message2 as string).endsWith(c);
// Arrow functions
var doLog = function (message) {
    console.log("message==>", message);
};
doLog("This is my arrow function in TS");
// Custom types
//In Line annotations
var drawPoint = function (point) {
    //..
};
drawPoint({ x: 3, y: 4 });
var drawPoint2 = function (point) {
    //..
};
drawPoint2({ x: 3, y: 4 });
// In OOPs -  Cohesion - all the things that belong to one place should be grouped together
// The functions and properties should be grouped using a class
// # CLASS - Used to groups properties and functions that are highly related or grouped
// Interface cannot include the algorithms / functions in an interface
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    // Methods
    Point2.prototype.draw = function () {
        console.log("X is " + this.x + " & Y is " + this.y);
        // ..
    };
    Point2.prototype.getDistance = function () {
        console.log("X is " + this.x + " & Y is " + this.y);
    };
    return Point2;
}());
var point_variable = new Point2;
point_variable.x = 12;
point_variable.y = 14;
point_variable.draw();
