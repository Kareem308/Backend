var promptK = require('prompt');
promptK.start();
promptK.get(['num1', 'op', 'num2'], function (err, any) {
    if (any.op === '+') {
        console.log(Number(any.num1) + Number(any.num2));
    }
    if (any.op === '-') {
        console.log(Number(any.num1) - Number(any.num2));
    }
    if (any.op === '*') {
        console.log(Number(any.num1) * Number(any.num2));
    }
    if (any.op === '/') {
        console.log(Number(any.num1) / Number(any.num2));
    }
});
