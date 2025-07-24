// spread 연산

// 비구조할당

let obj = {
    id: 1,
    name: kjh,
    age: 19
}

let {id, name, age} = obj;

console.log(id);

// let array = [1, 2, 3, 4];
// array = [...array, 5, 6, ...array]; // 배열 안의 값 복사

// console.log(array);

// let obj = {
//     name: "김종현",
//     age: 20

// }

// let obj2 = {
//     ...obj,
//     name: "김재현",
    
// }

let datalist = [];

window.onload = () => {  // 이벤트 정의
    getDataList();

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.Value;
            
            const lastId = datalist.length === 0 ? 0 :datalist[datalist.length - 1].id;

            const dataobj = { // [{id: 1, content:inputValue}, {id:2, content:inputValue}, {id:3, content: inputValue}]
                id: lastId + 1,
                cotent: inputValue
            }

            datalist = [...datalist, dataobj];
            addInput.value == "";

            getDataList();

        }
    }
}

const dataObj = {
    id: lastId + 1,
    content: inputValue
}

fetch("http://localhost:8080/data_array/data/addition"), {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dataObj)
}.then(response => {
    console.log();
})

data


function ContentData({ id, content }) { 
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-inputs" value="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;

}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataobj of dataList) {
        contentList
    }
    
}

function removeData(id) {
    // const findId = (dataObj) => dataObj.id === id;
    
    //[ {id: 1, content: "test1"}, {id: 2, content: "test2"}, {id: 3, content: "test3"} ]
    
    datalist.filter((dataObj) => dataObj.id !== id);
    
    //[ {id: 1, content: "test1"}, {id: 3, content: "test2"} ]

    getDataList();

}

function editData(id) {
    let findIndex = -1;

    for(let i = 0; i < datalist.length; i++) {
        if(datalist[i].id === id) {
            findIndex = i;
            break;
        }
    }

    let findObj = datalist.filter((dataObj) => dataObj.id === id)[0];

    findIndex = datalist.indexOf(findObj);

    const editInputs = document.querySelectorAll(".edit-inputs");

    datalist[findIndex].content = editInputs[findIndex].value;

    getDataList();

}