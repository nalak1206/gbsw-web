for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i,'*',j,'=',i*j);
    }
}

for (let dan = 2; dan <= 9; dan++) { 
    console.log(`${dan}단`)
    for (let num = 1; num <= 9; num++) {
        console.log(`${dan}*${num}=${dan*num}`)
    } 
    console.log(`\n`)
}