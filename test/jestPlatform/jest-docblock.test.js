/**
 * jest-docblock
 * 
 * 자바스크립트 파일 맨 위에서 주석을 추출하고 구문 분석하는 도구다.
 * 주석 블록 내부의 데이터를 다루기 위해 다양한 기능이 있다.
 */

test('jest-docblock', () => {
    const {
        parseWithComments
    } = require('jest-docblock');

    const code = `
    /**
     * This is a sample code.
     * 
     * @author Johnny
     * @flow
     */

    console.log('Hello World!');
    `;

    const parsed = parseWithComments(code);

    console.log('parsed :', parsed);
    /*
    > parsed: {
        comments: '    /**\nThis is a sample code.\n\n/\n\n    console.log(\'Hello World!\');',
        pragmas: [Object: null prototype] {
            author: 'Johnny',
            flow: ''
        }
      }
     */
});