/**
 * jest-validate 
 * 
 * 사용자가 제출한 구성을 검증하는 툴이다.
 * 함수는 2개의 인자를 갖는다: '사용자의 구성 및 예제 구성'과 '다른 옵션들을 포함한 객체'
 * 아래의 두 속성을 갖는 객체를 리턴한다.
 * 
 * hasDeprecationWarnings : 제출된 구성에 사용되지 않는 경고가 있는지 boolean 값으로 나타낸다.
 * isValid : 구성이 올바른지 아닌지 boolean 값으로 나타낸다.
 */

test('jest-validate', () => {
    const {
        validate
    } = require('jest-validate');

    const configByUser = {
        transform: '<rootDir>/node_modules/my-custom-transform'
    };

    const result = validate(configByUser, {
        comment: '   Documentation: http://custom-docs.com',
        exampleConfig: {
            transform: '<rootDir>/node_modules/babel-jest'
        }
    });

    console.log('result :', result);
    // > result : { hasDeprecationWarnings: false, isValid: true }
});