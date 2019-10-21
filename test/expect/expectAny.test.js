function random(fn) {
    return fn(Math.floor(Math.random() * 6 + 1));
}

test('random call calls its callback with a number', () => {
    const mock = jest.fn();

    random(mock);

    expect(mock).toBeCalledWith(expect.any(Number));
});