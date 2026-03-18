const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수 입력 ", function (score){
    
    if (score >= 60 && score <= 100) {
        console.log("합격")
     
    }else if (score < 60 && score >= 0) {
        console.log("불합격")
    }else {
        console.log("잘못된 값")
    }

    rl.close();
});