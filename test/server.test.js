const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('GET /', () => {
  it('returns 200 and contains greeting', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Hello, Geeks!');
  });
});