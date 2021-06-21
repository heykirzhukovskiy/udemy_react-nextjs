"use strict";
var a = 5;
var b = false;
var d = ['sds', 'sas'];
var e = 3;
function test(a) {
    return '';
}
var test2 = function (a) {
    return a * 2;
};
d = d.map(function (x) { return x.toLowerCase(); });
function countCoord(coord) { }
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString().toUpperCase());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
    }
}
var c = function (point) {
    var d = point;
};
function print(coord) { }
var g = 'test';
function performAction(action) {
    switch (action) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) { }
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
var testA = Test.A;
var nameA = Test[testA];
var f = 0 /* A */;
var u = [0, 'a', 2];
u.push(2);
console.log(u);
u.map(function (s) {
    switch (typeof s) {
        case 'string':
            break;
        case 'number':
            break;
    }
});
function logTime(num) {
    console.log(new Date());
    return num;
}
function logTime2(num) {
    if (typeof num === 'string') {
        num.toLocaleUpperCase();
    }
    console.log(new Date());
    return num;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var newMyClass = new MyClass();
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
