/**
 * 모듈 모킹
 * 
 * API에서 사용자 정보를 가져오는 클래스가 있다고 가정해보자.
 * 클래스에 axios를 통해 API를 호출하면, 모든 사용자 정보를 포함하는 data 속성을 리턴하는 기능이 있다.
 * 
 * 실제 API에 영향을 미치지 않고 테스트 하기 위해, jest.mock() 함수를 사용해서 axios 모듈을 자동으로 흉내낼 수 있다.
 * 
 * 모듈을 모킹하면 .get()으로 리턴되는 데이터를 테스트하기위해 mockResolvedValue() 함수를 제공한다.
 * 사실상, axios.get('/json/users.json')의 응답 데이터를 속이는 것이다.
 */

const axios = require('axios');
const Users = require('../../app/users');

// axios 모듈을 모킹한다.
jest.mock('axios');

test('fetch users', () => {
    // users 데이터 또한 직접 만들었기 때문에 
    // 실제 /json/users.json 파일의 내용에 의존성 없이 독립적으로 테스트할 수 있다.
    const users = [{
        name: 'XHAKA',
        role: 'centre midfielder'
    }];

    const res = {
        data: users
    };


    // 비동기 통신의 응답 값을 설정함으로써 '비동기 통신을 했다.'라고 가정한다.
    axios.get.mockResolvedValue(res); // 비동기 통신의 resolve시의 가짜 응답 값을 설정한다.

    // Users의 all()을 호출하고 then()에서 테스트를 진행한다.
    // * data는 mockResolvedValue에서 설정한 값이다.
    return Users.all().then(data => expect(data).toEqual(users));
});