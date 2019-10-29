/**
 * .mock 속성
 * 모든 mock 함수엔 mock 프로퍼티가 존재한다.
 * 이 속성은 함수 호출 방법 및 반환 된 함수에 대한 데이터가 존재한다.
 */

test('mock property', () => {
    const myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);
    // > [ {a}, {b} ]
});