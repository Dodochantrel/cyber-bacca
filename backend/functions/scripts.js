const { Client } = require('ssh2')
const ini = require('ini')
const { readFileSync } = require('fs');

function executeNmap(options){
    executeCommand("nmap", options)
}
function setupConnexion(){
    const conn = new Client();
    const config = {
        host: "10.103.3.124",
        port: 22,
        // privateKey: fs.readFileSync(configValues.SSH.PRIVATE_KEY),
        username: "kali",
        password: "kali",
    }
    conn.connect(config)
    return conn
}

function createCommandWithOptions(command,options){
    options = concatenateOptions(options)
    return `${command}${options}`
}

function concatenateOptions(options){
    stringOptions = ""
    options.map(option => {
        stringOptions += ` ${option}`
    })
    return stringOptions
}
function executeCommand(command, options){
    // const conn = setupConnexion();
    // let result = ''
    // var ip = ""
    // var optionsKept = []
    // for(let key in options) {
    //     if( key === "ip" ){
    //         ip = options[key]
    //     }else if(typeof options[key] == "boolean" && options[key] === true){
    //         optionsKept.push(key)
    //     }
    // }

    // console.log(optionsKept,ip)
    //TODO: voir pour les différentes commandes

    // conn.on('ready', () => {
    //     console.log("swag")
    //     conn.exec("ping 8.8.8.8." , {},(err, stream) => {
    //         if (err) throw err;
    //
    //         stream.on('close', (code, signal) => {
    //             console.log('command executed successfully')
    //         }).on('data',(data) => {
    //             result += data.toString();
    //         }).stderr.on('data', (data) => {
    //             console.log('Error Output:', data.toString());
    //         });
    //     });
    // });
    const conn = new Client();
    try { 
        conn.on('ready', () => {
        console.log('Client :: ready');
        conn.exec(command, (err, stream) => {
            if (err) console.log(err);
            stream.on('close', (code, signal) => {
                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect({
        host: "10.103.3.124",
        port: 22,
        username: 'kali',
        password: 'kali'
    });
    return data;
    } catch (error) {
        console.log('error ' + error)
    }
}
module.exports = {
    executeNmap
};