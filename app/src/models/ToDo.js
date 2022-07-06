"use strict";

const ToDoStorage = require("./ToDoStorage");

class ToDo {
    constructor(body) {
        this.body = body;
    }

    async viewList() {
        try {
            const data = await ToDoStorage.viewList();
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            return { msg: err };
        }
    }

    async addList() {
        const client = this.body;
        try {
            await ToDoStorage.addList(client.content, client.is_check);
            if (!clinet) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            return { msg: err };
        }
    }

    async deleteList() {
        const client = this.body;
        try {
            await ToDoStorage.deleteList(client.deleteList);
        } catch (err) {
            return { msg: err };
        }
    }

    async editList() {
        const client = this.body;
        try {
            await ToDoStorage.editList(
                client.content,
                client.isCheck,
                client.no
            );
            if (!clinet) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            return { msg: err };
        }
    }
}

module.exports = ToDo;
