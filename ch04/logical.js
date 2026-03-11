const islogin = true;
const isAdmin = false;

console.log(islogin && isAdmin);

console.log(true || false);
console.log(false || false);

let id = 'yone'
let pw = "1234"
let correctid = "yone"
let correctpw = "1234"
let result = (id === correctid && pw === correctpw) ? "로그인 성공" : "아이디 또는 비밀번호 오류";

console.log(result);


console.log(!true);
console.log(!null);

let email = "gmail"
let result2 = (email !== null && email !== undefined) ? "이메일 확인" : "이메일이 입력되지 않음";
let result3 = (email ?? null) ? "이메일 확인" : "이메일이 입력되지 않음";


console.log(result2);
console.log(result3);
console.log(null ?? "기본값");
console.log(undefined ?? "기본값");
console.log("안녕하세요" ?? "기본값");



//  ___________
// |     _     |
// | 0  | |  0 |
// |   ( _ )   |
//|   |⎷⎷⎷⎷⎷|  |
// |  |^^^^^|  |
// \___________/