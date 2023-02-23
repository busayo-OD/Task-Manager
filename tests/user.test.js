const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Busayo Dada',
        email: 'toyinoluwabusayo@gmail.com',
        password: 'bussyj001'
    }).expect(201)
})