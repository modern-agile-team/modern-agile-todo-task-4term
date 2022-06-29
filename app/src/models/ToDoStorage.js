"use strict";

class ToDoStorage {
    static #text = { //은닉화 public -> private , 정적변수 
        value: [],
        id: []
    };

    static getUsers(...values) {
        const text = this.#text 
        const newText =  values.reduce((newText, value) => {
            if (text.hasOwnProperty(value)) {
                newText[value] = text[value];
            }
            return newText;
        }, {});
        return newText;
    }
}

module.exports = ToDoStorage;