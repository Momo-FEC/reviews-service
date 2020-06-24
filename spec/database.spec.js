// const database = require('../database/index.js');
// const app = require('../server/index.js');
// const request = require('supertest');

// beforeAll(async () => {
//     await database.authenticate();
//   });
  
//   afterAll(async () => {
//     await database.close();
//   });


//   describe("Test endpoints", () => {
//     test("It should respond to the GET method for root(/)", async (done) => {
//       await request(app)
//         .get('/')
//         .then(res => {
//           expect(res.statusCode).toBe(200);
//           done();
//         });
//     });
// };