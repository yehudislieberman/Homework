interface Person {
    name: string;
    age: number;
    email: string;
}
function greetPerson(person: Person){
    console.log(`Hello, ${person.name}! Please verify that the following information is correct: Age- ${person.age}, Email-${person.email}`);
}

const adam: Person = {
    name: "Adam",
    age: 55,
    email: "adam123@gmail.com",
};

function multiplyNumbers(number1: number, number2: number) {
    console.log(number1 * number2);
}

greetPerson(adam);
multiplyNumbers(3, 7);
