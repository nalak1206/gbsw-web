const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수 입력 ", function (score){
    if(score <= 100 && score > 90){
        console.log("A")
    } else if(score > 80 && score <= 90){
        console.log("B")
    } else if(score > 70 && score <= 80){
        console.log("C")
    } else if(score > 60 && score <= 70){
        console.log("D")
    } else if(score >= 0 && score <= 60){
        console.log("F")
    }else {
        console.log('잘못된 값')
        
    } 
    rl.close();
});