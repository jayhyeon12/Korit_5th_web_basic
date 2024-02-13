// javascripst 배열: 자바의 arraylist와 유사

let numbers1 = [];
let numbers2 = new Array();

numbers1.push(8);
console.log(numbers1);

numbers1.push(9);
console.log();


for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

// 향상된 for
for(let num of numbers1) {
    console.log(num);
}

numbers1.forEach(n => console.log(n));