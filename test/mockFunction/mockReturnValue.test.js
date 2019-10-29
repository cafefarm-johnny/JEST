/**
 * 모의 반환 값
 * 테스트 중에 Mock 함수를 사용해 코드에 테스트 값을 삽입할 수 있다.
 */

test('mock return value', () => {
    const myMock = jest.fn();
    console.log('myMock() :', myMock()); // undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('X').mockReturnValueOnce(true);

    console.log('myMock(), myMock(), myMock(), myMock() :', myMock(), myMock(), myMock(), myMock());
});

/**
 * 모의 함수는 함수 연속 전달 스타일을 사용하는 코드에서 매우 효과적이다.
 * 이 스타일로 작성된 코드는 테스트에 직접 값을 주입하기 위해 실제 구성 요소의 동작을 재현하는 복잡한 단계가 필요하지 않다.
 */
test('mock return value 2', () => {
    const filterTestFn = jest.fn();

    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    console.log('result :', result);
    console.log('filterTestFn.mock.calls :', filterTestFn.mock.calls);
});