exports.sum = (a, b) => {
    return a + b;
}

exports.minus = (a, b) => {
    return a - b;
}

exports.total = (numbers) => {
    return numbers.reduce((num1, num2) => num1 + num2);
}