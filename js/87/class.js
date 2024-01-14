(function () {
    'use strict'
    class Person {

        #firstName;
        #lastName;
        #age;

        constructor(firstName, lastName, age) {
            this.#firstName = firstName;
            this.#lastName = lastName;
            this.age = age;
        }

        get firstName() {
            return this.#firstName;
        }

        set firstName(value) {
            this.#firstName = value;
        }

        get lastName() {
            return this.#lastName;
        }

        set lastName(value) {
            this.#lastName = value;
        }

        get age() {
            return this.#age;
        }

        set age(age) {
            if (age < 0 || age > 120) {
                throw new Error('Invalid age - age must be a number between 0 and 120.');
            }
            this.#age = age;
        }

        toString() {
            const properties = ['firstName', 'lastName', 'age'];
            return properties
                .map(property => `${property}: ${this[property]}`)
                .join(' ');
        }

    }

    class Student extends Person {
        #grade;

        constructor(firstName, lastName, age, grade) {
            super(firstName, lastName, age);
            this.#grade = grade;
        }

        get grade() {
            return this.#grade;
        }

        set grade(value) {
            this.#grade = value;
        }
        toString() {
            const studentProperties = super.toString();
            return `${studentProperties} grade: ${this.#grade}`;
        }
    }

    const person = new Person('Joe', 'Biden', 88);
    console.log(person.toString());

    const student = new Student('Kamala', 'Harris', 59, 'F');
    console.log(student.toString());
}());