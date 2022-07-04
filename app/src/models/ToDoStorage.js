//routes index ctrl 연결
//모델 분리, 받아온 데이터를 처리
"use strict";

const { fdatasync } = require("fs");
const { SocketAddress } = require("net");

const fs = require("fs").promises; //promise 데이터는 반환하는데 시간이 걸림

class ToDoStorage {
    static #getData(data, value) {
        const dataList = JSON.parse(data);
        const idx = dataList.value.indexOf(value); // => text의 key값을 받아옴
        const dataKeys = Object.keys(dataList);
        const dataInfo = dataKeys.reduce((newData, info) => {
            newData[info] = dataList[info][idx];
            return newData;
        }, {});
        return dataInfo;
    }

    static getData(value) {
        return fs
        .readFile("./src/databases/todo.json")
        .then((data) => {
            console.log(this.#getData(data, value));
            return this.#getData(data, value);
        })
        .catch(console.error);
    }

    static #getList(data, fields){
        const dataList = JSON.parse(data);
        const newData = fields.reduce((newData, field) => {
            if (dataList.hasOwnProperty(field)) {
                newData[field] = dataList[field];
            }
            return newData;
        }, {});
        return newData;
        
    }
   
    static getList(...fields) {
        return fs
        .readFile("./src/databases/todo.json")
        .then((data) => {
            return this.#getList(data, fields);


        })
        .catch(console.error);

    }

    static async save(todoInput){
        const data = await this.getList("value", "id");
        data.value.push(todoInput.value);
        data.id.push(todoInput.id);
        fs.writeFile("./src/databases/todo.json", JSON.stringify(data));
        return { success: true };
    }

    
}

module.exports = ToDoStorage;