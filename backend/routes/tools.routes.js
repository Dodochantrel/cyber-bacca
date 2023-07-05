const express = require('express');
const routerTools = express.Router();
const { executeNmap } =  require("../functions/scripts");

routerTools.post('/nmap',(req, res) => {
    const result = executeNmap(req.body)
    res.send(result)
})

module.exports = routerTools;
