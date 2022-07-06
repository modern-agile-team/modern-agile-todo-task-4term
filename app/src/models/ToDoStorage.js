"use strict";

const db = require("../config/mysql");

class ToDoStorage {
    static async viewList() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM lists;";
            db.query(query, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async addList(content, isCheck) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO lists(todo,is_check) VALUES(?,?);";
            db.query(query, [content, isCheck], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async deleteList(content) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM lists WHERE no = ?;";
            db.query(query, [content], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async editList(content, isCheck, no) {
        return new Promise((resolve, reject) => {
            const query =
                "UPDATE lists SET todo = ?,is_check = ? WHERE no = ?;";
            db.query(query, [content, isCheck, no], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = ToDoStorage;
