const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("정수 입력 ", function (num){
    if(num % 2 === 0){
        console.log("짝수")
        rl.close();
    }else {
        console.log('홀수')
        rl.close();
    }
    
});