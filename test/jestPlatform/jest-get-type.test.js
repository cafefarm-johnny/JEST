/**
 * jest-get-type
 * 
 * 자바스크립트 값의 기본 타입을 식별하는 모듈이다.
 * 인자로 전달된 값의 타입으로 문자열을 반환한다.
 */

test('jest-get-type', () => {
    const getType = require('jest-get-type');

    const number = 100;
    const string = 'abc'
    const array = [1, 2, 3];
    const nullValue = null;
    const undefinedValue = undefined;


    console.log('getType(number) :', getType(number));
    // > getType(number) : number
    console.log('getType(string) :', getType(string));
    // > getType(string) : string
    console.log('getType(array) :', getType(array));
    // > getType(array) : array
    console.log('getType(nullValue) :', getType(nullValue));
    // > getType(nullValue) : null
    console.log('getType(undefinedValue) :', getType(undefinedValue));
    // > getType(undefinedValue) : undefined
});