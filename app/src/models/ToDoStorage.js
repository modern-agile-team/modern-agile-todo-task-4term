//routes index ctrl 연결
"use strict";

const db = require("../config/mysql");

class ToDoStorage {
    
    static async getData() {  //데이터 전체 조회
        return new Promise((resolve, reject) => { //성공 시 resolve, 실패 시 reject 
            const query = "SELECT * FROM todo_list;";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
        
    }

    static async dataSave(input){ //데이터 저장
        return new Promise((resolve, reject) => { //성공 시 resolve, 실패 시 reject 
            const query = "INSERT INTO todo_list(description, id) VALUES(?, ?);";
            db.query(
                query, 
                [input.value, input.id], 
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

    static async delData(client) {  //데이터 전체 조회
        return new Promise((resolve, reject) => { //성공 시 resolve, 실패 시 reject 
            const query = "DELETE FROM todo_list WHERE id = ?;";
            db.query(
                query, 
                [client.id], 
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
        
    }

    static async upData(client) { 
        console.log(client);
        return new Promise((resolve, reject) => { 
            const query = "UPDATE todo_list SET description = ? WHERE id = ?;";
            db.query(
                query, 
                [client.value, client.id], 
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
        
    }
    
    
}

module.exports = ToDoStorage;