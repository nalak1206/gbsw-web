function solution(numbers, num1, num2) {
    var answer = [];
    for (let i = num1; i <= num2; i++) {
        answer.push(numbers[i])
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5], 1, 3))

function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.legnth; i++) {
        let flag = true;
        for (let j = 0; j < delete_list.legnth; j++) {
            if (arr[i] === delete_list[j]) {
                flag = false;
            }
        }
        if (flag) {
            answer.push(arr[i])
        }
    }

}
return answer;

function solution(numbers) {
    let sum = 0;
    for (let i = 0; i = numbers.legnth; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length;

}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))