const express = require('express');
const app = express();

const parseNumbers = (req, res, next) => {
    const num1 = parseFloat(req.params.a);
    const num2 = parseFloat(req.params.b);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid number(s) were provided');
    }

    req.num1 = num1;
    req.num2 = num2;
    next();
};

const validateOperator = (req, res, next) => {
    const operator = req.params.operator;

    if (!['+', '-', '*', '/'].includes(operator)) {
        return res.status(400).send('Invalid operator provided');
    }

    req.operator = operator;
    next();
};

app.get('/add/:a/:b', parseNumbers, (req, res) => {
    const result = req.num1 + req.num2;
    res.send(`${result}`);
});

app.get('/subtract/:a/:b', parseNumbers, (req, res) => {
    const result = req.num1 - req.num2;
    res.send(`${result}`);
});

app.get('/:operator/:a/:b', parseNumbers, validateOperator, (req, res) => {
    let result;
    const { num1, num2, operator } = req;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.status(400).send('Cannot divide by zero');
            }
            result = num1 / num2;
            break;
    }

    res.send(`${result}`);
});

app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.listen(80);