exports.sum = (a, b) => {
    return a + b;
}

exports.minus = (a, b) => {
    return a - b;
}

exports.total = (numbers) => {
    let result = 0;

    numbers.forEach(n => {
        result += n;
    });

    return result;
}