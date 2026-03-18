const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("정말로 C 드리이브를 포멧하시겠습니까? : ", function (ch) {
    switch (ch) {
        case 'y':
            console.log("포멧을 시작합니다");
            break;

        case 'n':
            console.log("포멧을 취소합니다");
            break;

        default: ;
            console.log("유효하지 않은 답변입니다.")
            break;
    }

    rl.close();
});
