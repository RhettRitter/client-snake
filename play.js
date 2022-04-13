const connect = require('./client');
console.log("connecting...");
connect()

const setupInput = function (conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf-8');
    stdin.resume();
    stdin.on("data", key => {
        handleUserInput(key);
    });
    return stdin;
};
const handleUserInput = (key) => {
    const stdout = process.stdout;
    process.stdin.on('data', (key) => {
        if (key === '\u0003') {
            stdout.write("bye bye.\n");
            process.exit();
        }
    });
}
setupInput();