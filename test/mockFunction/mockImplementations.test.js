/**
 * mock 구현
 * 
 * 반환 값을 지정하는 기능을 넘어서 모의 함수의 구현을 완전히 대체하는게 유용한 경우가 있다.
 * jest.fn()이나 mock.mockImplementationOnce() 메소드로 구현할 수 있다.
 */

test('Mock Implementations', () => {
    // mockImple 모듈 파일을 자동으로 모킹한다.
    jest.mock('../../app/mockImple.js');

    const foo = require('../../app/mockImple');

    // foo는 mock 함수다.
    foo.mockImplementation(() => 42);
    foo();
});

/**
 * mockImplementation 메소드는 다른 모듈에서 작성된 mock 함수의 기본 구현을 정의해야할 때 유용하다.
 */
test('mockImplementationOnce', () => {
    const myMockFn = jest.fn()
        .mockImplementationOnce(callback => callback(null, true))
        .mockImplementationOnce(callback => callback(null, false));

    myMockFn((err, val) => console.log('val :', val));
    // > true

    myMockFn((err, val) => console.log('val :', val));
    // > false
});

/**
 * 모킹된 함수에 mockImplementationOnce로 정의된 구현이 부족하면 jest.fn()으로 설정된 기본 구현을 실행한다.
 * * jest.fn()이 정의된 경우에만 실행된다.
 */

test('default implementation', () => {
    const myMockFn = jest.fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log('myMockFn(), myMockFn(), myMockFn(), myMockFn() :',
        myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
});

/**
 * 일반적으로 항상 this를 리턴하는 연속된 메소드를 가지는 경우, 
 * .mockReturnThis() 메소드 형태로 이런 작업을 단순화하는 슈가 API가 있다.
 */
test('mockReturnThis()', () => {
    const otherObj = {
        myMethod: jest.fn(function () {
            return this;
        })
    };

    // 위와 같이 this를 반환하는 방법은 아래와 같다.

    const myObj = {
        myMethod: jest.fn().mockReturnThis()
    };
});