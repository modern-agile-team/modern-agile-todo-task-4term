"use strict"

const ToDo = require("../models/ToDo")

const output = {
    home: (req, res) => {
        res.render("index");
     },
}

const process = {
    save: async (req, res) =>{
        const todo = new ToDo(req.body);
        const response = await todo.save();

        return res.json(response);

    },

    load: async (req, res) =>{
        const todo = new ToDo();
        const response = await todo.load();
        
        return res.json(response);
    },

    del: async (req, res) =>{
        const todo = new ToDo(req.body);
        const response = await todo.del();

        return res.json(response);

    }, 
    update: async (req, res) =>{
        const todo = new ToDo(req.body);
        const response = await todo.up();

        return res.json(response);

    }, 
}

module.exports = {
    output, 
    process,
};