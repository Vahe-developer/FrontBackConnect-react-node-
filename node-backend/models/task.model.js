const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const task = new Schema({
    a: String,
    b:String,
})

module.exports = mongoose.model("task",task,"task")