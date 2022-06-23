import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log('req is sent');

    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');

    const mars = JSON.stringify({ location: 'Mars' });

    res.end(mars);
})

server.listen(3000, () => {
    console.log('response at http://localhost:3000');
})

