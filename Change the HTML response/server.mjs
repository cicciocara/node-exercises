import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log(`req is sent`);

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');


    res.end('<html><body><h1>Hello world</h1></body></html>')
})

server.listen(3000, () => {
    console.log('res sent at: http://localhost:3000');
})