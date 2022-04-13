const net = require("net");
const connect = function () {
    const conn = net.createConnection({
        host: '10.0.2.15',
        port: 50541
        })
    conn.on("connect", () => {
        console.log("Successfully connected to game server" )   
        conn.write('RJR'); 
        // code that does something when the connection is first established
          });
          conn.on('data', (data) => {
            console.log('RJR', data)
          });

    conn.setEncoding("utf-8");

    return conn;

};
module.exports = connect