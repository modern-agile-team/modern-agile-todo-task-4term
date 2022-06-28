"use strict"
const text = {
    value: ["할 일1", "할 일2"],
};

const output = {
    home: (req, res) => {
        res.render("index");
     },
}
const process = {
    home: (req, res) =>{
        const text = req.body;

    console.log(text);
    },
}

module.exports = {
    output, 
    process,
};