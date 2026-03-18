const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("곱할 수를 입력하시오 ", function (dan){
    for(let i = 1; i < 10; i++) {
        console.log(dan+" x "+i+" = "+dan*i)
    }
});

