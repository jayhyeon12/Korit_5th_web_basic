// javascript 객체 형태: { key: value, key: value };

let student = {
    name: "김세혁",
    age: 25
}

    console.log(student);
    console.log(typeof(student));
    console.log(student.name);

class Student {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}    

let a = new Student("김세현", 26);
console.log(a);

class User {
    #username;
    password;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "sehyeon";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "sehyeon");
dataMap.set("password", "9038");

console.log(dataMap);
console.log(dataMap.get("password"));