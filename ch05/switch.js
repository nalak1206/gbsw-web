const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("단축키 입력 : ", function (num) {
    switch (parseInt(num)) {
        case 1:
            console.log("'어머니'님에게 전화를 걸겠습니다.");
            break;
        case 2: ;
            console.log("'아버지'님에게 전화를 걸겠습니다.");
            break;
        case 3: ;
            console.log("'친구'님에게 전화를 걸겠습니다.");
            break;
        default:
            console.log("단축기가 설정되지 않았습니다.");
            break;
    }
    rl.close();
});
