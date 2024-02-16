function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); // EL 표현식
    console.log(`aaaa${num1}bbbb${num2}cccc${num1}`);
    
    return num1 + num2;
}

console.log(add(15, 35));

let addFunction = add;

console.log(add);
console.log(addFunction);
console.log(addFunction(25, 40));

let user = {
    username: "000",
    password: "9864",
    addFunction:  function add(a, b) {
        return a + b;
    }
}

console.log(user.addFunction(15, 35));

// 익명 함수
let sub = function(a, b) {
    return a - b;
}

let result1 = sub(20, 8);
    console.log(result1);
    console.log(sub);

// 화살표 함수(람다식)
let div = (a, b) => {
    return a / b;
}

console.log(div(15, 3));

div = (a, b) => a / b;
console.log(div(16, 4));
console.log(div);