(function () {

    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
            this.speed = 0;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going at a speed of ${speed}`);
        }

        print() {
            console.log(`The vehicle is ${this.color} and is currently going at a speed of ${this.speed}`);

        }
    }

    class Plane extends Vehicle {
        go(speed) {
            this.speed = speed;
            console.log(`Now flying at a speed of ${speed}`);
        }
    }

    const v = new Vehicle('black');
    v.go(25);
    v.print();

    const p = new Plane('white');
    p.go(1000);
    p.print();

}());


