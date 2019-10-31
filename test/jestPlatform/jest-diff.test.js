/**
 * jest-diff
 * 
 * 데이터의 변화를 시각화하기 위한 도구다.
 * 모든 타입의 두 값을 비교하는 함수를 내보내고 두 인자의 차이를 나타내는 문자열을 '최대한 예쁘게' 반환한다.
 */

test('jest-diff', () => {
    const diff = require('jest-diff');

    const obj1 = {
        a: {
            b: {
                c: 5
            }
        }
    };
    const obj2 = {
        a: {
            b: {
                c: 6
            }
        }
    };

    const diffResult = diff(obj1, obj2);

    console.log('diffResult :', diffResult);
    /*
        diffResult: -Expected +
            Received

        Object {
            "a": Object {
                "b": Object {
                    -"c": 5,    <
                    +"c": 6,    < 
                },
            },
        }
    */
});