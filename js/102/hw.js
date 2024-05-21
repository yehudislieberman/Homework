function greetPerson(person) {
    console.log("Hello, ".concat(person.name, "! Please verify that the following information is correct: Age- ").concat(person.age, ", Email-").concat(person.email));
}
var adam = {
    name: "Adam",
    age: 55,
    email: "adam123@gmail.com",
};
function multiplyNumbers(number1, number2) {
    console.log(number1 * number2);
}
greetPerson(adam);
multiplyNumbers(3, 7);
