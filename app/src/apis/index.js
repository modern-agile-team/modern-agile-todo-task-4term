"use strict";

const express = require("express");
const router = express.Router();

const toDoCtrl = require("./ToDo.ctrl");

// 전체 조회
router.get("/", toDoCtrl.process.readAllToDos);

// 생성
router.post("/", toDoCtrl.process.createToDo);

// 수정
router.patch("/:toDoId", toDoCtrl.process.updateToDo);

// 체크
router.patch("/check/:toDoId", toDoCtrl.process.updateCheckedToDo);

// // 삭제
router.delete("/:toDoId", toDoCtrl.process.deleteToDo);

module.exports = router;
