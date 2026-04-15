 function times(num) {
    return num * 2
 }
let result = times(3);
console.log(result)

const arr = [1, 4, 2, 8, 5, 11];
let sum = 0;

arr.push(15)

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum)


function solution(numbers, num1, num2) {
    var answer = [];
    for(let i = num1; i <= num2; i++){
        answer.push(numbers[i])
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5],1,3))