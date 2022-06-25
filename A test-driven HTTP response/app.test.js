const supertest = require('supertest');

const app = require('./app');

const request = supertest(app);


test('GET /', async () => {
    const response = await request.get('/')
        .expect('content-type', 'text/html');

    expect(response.text).toEqual('<html><body>Welcome to the World Wide Web!</body></html>')
})