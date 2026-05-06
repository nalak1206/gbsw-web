let snacks = ["치즈 토스트", "딸기 에이드", "초코 쿠키"];

const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("btn_event").onclick = function () {
    const num = getRandomNumber(0, snacks.length - 1);
    document.getElementById("event_result").textContent =
        `오늘의 간식은 ${snacks[num]}입니다`;
};

const rendersnack = function (snack) {
    const li = document.createElement("li");
    li.textContent = snack;
    document.getElementById("menu_list").appendChild(li);

    // 입력받은 것을 ul 내에 li로 추가
};

const addsnack = function (snack) {
    if (snack) {
        snacks.push(snack);
        return true;
    }
    return false;

    // 입력된 값이 없으면 false,
    // 값이 있으면 snacks 배열에 추가 후 true 반환
}

for (let i = 0; i < snacks.length; i++) {
    rendersnack(snacks[i]);
}

document.getElementById("btn_add").onclick = function () {
    const snack = document.getElementById("input_snack").value;

    if (addsnack(snack)) {
        rendersnack(snack);
    } else {
        alert("간식 이름 입력")
    }



    // 1.   입력된 값 받아오기
    // 2.   값이 비었는지 판단
    // 2-1. 비었다면 안내 후 종료
    // 3.   비어있지 안다면 배열에 추가
    // 4.   목록에 렌더링
}