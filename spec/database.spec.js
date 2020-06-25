/* eslint-disable quotes */
/* eslint-disable no-undef */
const app = require('../server/index.js');
const request = require('supertest');

require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("Test endpoints", () => {
  test("It should respond to the GET method for root(/)", async (done) => {
    await request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});