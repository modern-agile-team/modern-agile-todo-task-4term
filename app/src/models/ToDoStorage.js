//routes index ctrl 연결
"use strict";

const db = require("../config/mysql");

class ToDoStorage {
    
    static getData() {  //데이터 전체 조회
        return new Promise((resolve, reject) => { //성공 시 resolve, 실패 시 reject 
            const query = "SELECT * FROM todo;";
            db.query(query, (err, data) => {
                if (err) reject(err);
                console.log(data[0]);
                resolve(data[0]);
            });
        });
        
    }

    static async dataSave(input){
        return new Promise((resolve, reject) => { //성공 시 resolve, 실패 시 reject 
            const query = "INSERT INTO todo(id, value) VALUES(?, ?);";
            db.query(
                query, 
                [input.id, input.value], 
                (err) => {
                if (err) reject(err);
                resolve({ success: true });
            });
        });
    }
}

module.exports = ToDoStorage;