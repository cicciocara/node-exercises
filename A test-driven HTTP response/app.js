const { createServer } = require('node:http');

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');

    res.end('<html><body>Welcome to the World Wide Web!</body></html>')
})


module.exports = app;