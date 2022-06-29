"use strict"

const ToDoStorage = require("../../models/ToDoStorage")

const output = {
    home: (req, res) => {
        res.render("index");
     },
}
const process = {
    home: (req, res) =>{
        const text = req.body.value,
              id = req.body.id;
        console.log(ToDoStorage.getUsers("value","id"));
        console.log(text, id);

        
        // const response = {};
        // if (text.length > 5){
        //     response.success = true;
        //     response.msg = "5이상 입니다."
        //     return res.json(response);
        // }    
        // response.success = false;
        // response.msg = "5이하 입니다."
        // return res.json(response);
    },
}

module.exports = {
    output, 
    process,
};