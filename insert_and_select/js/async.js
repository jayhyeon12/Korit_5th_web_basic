// console.log(1);
// console.log(2);
// console.log(3);
// 동기 처리

// setTimeout(() => { 
//     console.log(4);
//     setTimeout(() => {
//      console.log(5);   
//     }, 2000);
// }, 3000);

// Promise(): 비동기
// resolve() 실행 시 then()에 포함된 함수가 실행됨
new Promise((reslove, reject) => {
    setTimeout(() => {
    console.log("1번");
    }, 2000);
    reslove("3번");
}).then((result) => {
    console.log(result);
});

console.log("2번");

console.log("프로그램 시작");

const p = new Promise((reslove, reject) => {
    
    console.log("여기부터");
    console.log("여기까지");
    if (0 === 0) {
        reslove();
    } else {
        reject(new Error("오류"));
    }
});

p.then((response) => {
    console.log("3초 뒤에 출력");
}).catch((error) => {
    console.log(error);
}).finally(() => {

});


console.log("여기 먼저");