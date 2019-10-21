test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();

    [1].map(x => mock(x));

    // expect(mock).toBeCalledWith(1);
    // expect(mock).toBeCalledWith(2);
    expect(mock).toBeCalledWith(expect.anything());
});

test('Math와 Kor는 같다.', () => {
    class Math {
        constructor(one, two, three) {
            this.one = one;
            this.two = two;
            this.three = three;
        }
    };

    class Kor {
        constructor(one, two, three) {
            this.one = one;
            this.two = two;
            this.three = three;
        }
    };

    const korObj = new Kor('하나', '둘', '셋');
    const mathObj = new Math(1, 2, 3);

    expect(korObj).toEqual(mathObj);
    // expect(korObj).toEqual(expect.anything());
});