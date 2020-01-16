var express = require('express');
var router = express.Router();
const task = require("../../models/task.model");

/* GET home page. */
router.post('/', function(req, res, next) {
    task.find({})
        .exec(function (err,task) {
            if (err) return console.log(err)
            console.log(task)
        })
    console.log(req.body)
    res.send("true");
});

module.exports = router;
