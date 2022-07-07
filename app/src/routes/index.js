"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./index.ctrl");

router.get("/", ctrl.output.home);
router.get("/load", ctrl.process.load);

router.post("/post", ctrl.process.save);
router.post("/del", ctrl.process.del);
router.post("/update", ctrl.process.update);
router.post("/lineUpdate", ctrl.process.lineUpdate);


module.exports = router;
