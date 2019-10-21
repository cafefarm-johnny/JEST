describe('arrayContaining', () => {
    const expected = ['Park', 'Kim'];

    test('추가 요소가 포함된 경우도 매치된다', () => {
        expect(['Park', 'Kim', 'Jamong']).toEqual(expect.arrayContaining(expected));
    });

    test('받은 값에 예상된 요소가 포함되지 않으면 매치되지 않는다', () => {
        expect(['Kim', 'Jamong']).not.toEqual(expect.arrayContaining(expected));
    });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
    const expected = [1, 2, 3, 4, 5, 6];

    test('예상 못한 번호 7과도 매치된다', () => {
        expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(expect.arrayContaining(expected));
    });

    test('예상 번호 2가 없이는 매치되지 않는다', () => {
        expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(expect.arrayContaining(expected));
    });
});