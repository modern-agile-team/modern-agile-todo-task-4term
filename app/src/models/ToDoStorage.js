//routes index ctrl 연결
//모델 분리, 받아온 데이터를 처리
"use strict";

class ToDoStorage {
    static #text = { //은닉화 public -> private , 정적변수 
        value: ["aa", "bb"],
        id: ["1", "2"]
    };

    static getData(id) {
        const data = this.#text;
        const idx = data.id.indexOf(id); // => text의 key값을 받아옴
        const dataKeys = Object.keys(data);
        const dataInfo = dataKeys.reduce((newData, info) => {
            newData[info] = data[info][idx];
            return newData;
        }, {});
        return dataInfo;

    
    }

    // static getUsers(...values) { //...values = value, id 
    //     const text = this.#text 
    //     const newText =  values.reduce((newText, value) => {
    //         if (text.hasOwnProperty(value)) {
    //             newText[value] = text[value];
    //         }
    //         return newText;
    //     }, {});
    //     return newText;
    // }
}

module.exports = ToDoStorage;