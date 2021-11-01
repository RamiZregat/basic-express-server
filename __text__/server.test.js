const {app}=require('../src/server');
const supertest=require('supertest');
const mockRequest=supertest(app);

describe('Web Server',()=>{



    test('Should respond with 404 status on a bad route',async()=>{
        const response=await mockRequest.get('/bananna')
        expect(response.status).toBe(404)
    })


    test('Should respond with 404 status on an invalid method',async()=>{
        const response=await mockRequest.put('/person')
        expect(response.status).toBe(404)
    })

    test('Should respond with 500 status because there is no name',async()=>{
        const response=await mockRequest.get('/person')
        expect(response.status).toBe(500)
    })

    test('Should respond with 200 status because there is name',async()=>{
        const response=await mockRequest.get('/person?name=rami')
        expect(response.status).toBe(200)
    })

})