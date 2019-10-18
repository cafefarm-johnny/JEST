const myModule = require('../app/myMath')

test('5 plus 2', () => {
    expect(myModule.sum(5, 2)).toBe(7); // 성공 케이스
    expect(myModule.sum(5, 2)).toBe(15); // 실패 케이스
});

describe('myModule 검증 테스트 케이스', () => {
    test('[sum() 함수 검증] 10 + 5 = 15이다.', () => {
        expect(myModule.sum(10, 5)).toBe(15);
    });

    test('[minus() 함수 검증] 20 - 2 = 18이다.', () => {
        expect(myModule.minus(20, 2)).toBe(18);
    });

    test('[total() 함수 검증] [10, 20, 30, 40, 50]의 모든 합산은 150이다.', () => {
        expect(myModule.total([10, 20, 30, 40, 50])).toBe(150);
    });
});