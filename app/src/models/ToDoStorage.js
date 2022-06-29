"use strict";

class ToDoStorage {
    static #text = { //은닉화 public -> private , 정적변수 
        value: ["할 일1", "할 일2"],
        id: ["0", "1"]
    };

    static getUsers(...values) {
        const text = this.#text 
        const newText =  values.reduce((newText, value) => {
            if (text.hasOwnProperty(id)) {
                // newText[value] = text[value];
                console.log(id);
            }
            return newText;
        }, {});
        return newText;
    }
}

module.exports = ToDoStorage;