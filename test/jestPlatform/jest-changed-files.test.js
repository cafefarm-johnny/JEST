/**
 * jest-changed-files
 *
 * git/hg 레포지토리의 수정된 파일들을 식별하는 툴이다.
 * 2개의 기능이 있다.
 * - getChangedFilesForRoots : 변경된 파일들과 레포지토리 정보를 가진 객체가 resolves된 프로미스를 리턴한다.
 * - findRepos : 지정된 경로에 포함된 저장소 설정이 resolves된 프로미스를 리턴한다.
 */

test("jest-changed-files", async () => {
    const {
        getChangedFilesForRoots,
        findRepos
    } = require("jest-changed-files");

    const files = await getChangedFilesForRoots(["./test"], {
        lastCommit: true
    });

    console.log("files :", files);
    // > files : { changedFiles:
    //          Set { 'D:\\fork\\JEST TEST\\test\\mockFunction\\mockNames.test.js },
    //          repos: { git: Set { 'D:\\fork\\JEST TEST' }, hg: Set { } }
    //   }

    const repos = await findRepos(["./test"]);

    console.log("repos :", repos);
    // > repos : { git: Set { 'D:\\fork\\JEST TEST' }, hg: Set {} }
});
