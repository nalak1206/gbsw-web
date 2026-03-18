const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("나이 입력 ", function (age){
    if(age <= 100 && age >= 19){
        console.log("성인")
        rl.close();
    } else if(age < 19 && age > 0){
        console.log("미성년자")
        rl.close();
    }else {
        console.log('잘못된 값')
        rl.close();
    }
    
});