// 변수 선언 시: var, let (재선언, 재할당 가능)
// 상수 선언 시: const (재선언, 재할당 불가)

var num1 = 5;
var num2 = 7;

console.log(num1 + num2);

// 호이스팅: 메모리 참조 이전에 변수 선언이 무조건 일어남
console.log(num1 + num3);
var num3 = 40;
console.log(num3);

let num4 = 20;
num4 = 25;
console.log(num4);