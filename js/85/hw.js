(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Vehicle is now going at speed ${speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`The vehicle is ${this.color} and is currently going ${this.speed}`);
    };

    function Plane(color) {
        this.color = color;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Now flying at speed ${speed}`);
    };

    const v = new Vehicle('white');
    v.go(35);
    v.print();

    const p = new Plane('gray');
    p.go(800);
    p.print();

}());

