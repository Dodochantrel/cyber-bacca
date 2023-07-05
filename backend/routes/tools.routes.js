const express = require('express');
const routerTools = express.Router();
const { executeNmap } =  require("../functions/scripts");

routerTools.post('/nmap',(req, res) => {
    const result = executeNmap(req.body).then((result) => {
        return res.status(200).json({ success: true, message: 'ça a marcher', result });
    }).catch((err) => {
        return res.status(500).json({ success: false, message: 'ça a pas marcher', err });
    })
})

module.exports = routerTools;
