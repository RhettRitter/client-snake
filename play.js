const net = require("net");

const connect = function () {
    const conn = net.createConnection({
        host: '10.0.2.15',
        port: 50541
        })
    conn.on("connect", () => {
        console.log('you ded cuz you idled')    
        // code that does something when the connection is first established
          });
        


    conn.setEncoding("utf-8");

    return conn;

};

console.log("connecting...");
connect()