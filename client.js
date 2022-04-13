const net = require("net");
const connect = function () {
    const conn = net.createConnection({
        host: '10.0.2.15',
        port: 50541
        })
    conn.on("connect", () => {
        console.log("Successfully connected to game server" );   
        conn.write('Name: RJR');
        /*setInterval(()  => {
            conn.write('Move: up')
        }, 50);*/
        // code that does something when the connection is first established
          });
        conn.on('data', (data) => {
            console.log(data)
          });

    conn.setEncoding("utf-8");

    return conn;

};
module.exports = connect;