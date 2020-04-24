const server = require ('../../server');
const request = require('supertest');
const db = require('../../../database/dbConfig');


describe('users route', ()=> {
    beforeEach(async ()=> {
        await db('users').truncate();
    })
})

test('returns an object on get ', async ()=> {
    const reg = await request(server)
    .post('/api/users/register')
    .send({
        first_name: 'Tony',
        last_name: 'Test',
        password: 123,
        email: 'someGuy@email.com'
    })
})


test('it will let you post', async ()=> {
    const reg = await request(server)
    .post('/api/users/register')
    .send({
        first_name: 'Tony',
        last_name: 'Test',
        password: '123',
        email: 'someGuy@email.com'
    });
    
    expect(reg.status).toBe(201)
})

test('it will let you login', async ()=> {
    const reg = await request(server)
    .post('/api/users/register')
    .send({
        first_name: 'Tony',
        last_name: 'Test',
        password: '123',
        email: 'someGuy@email.com'
    })
    const login = await request(server)

    .post('api/users/login')
    .send({
        email: 'someGuy@email.com',
        password: '123'
    });
    expect (login.status).toBe(200)
})

it('should return a JSON object from the index route', async ()=> {
    const expectedBody = { api: 'Quake Online!'};

    const response = await request(server).get('/');

    expect(response.body).toEqual(expectedBody)
})