// ---------------------OPTION1-----------------------------
// const assert = require("chai").assert;
// const expect = require("chai").expect;
// const app = require("../index");
// const request = require("supertest");

// describe("test1", () => {
//   it("should retrun hello world", done => {
//     request(app)
//       .get("/")
//       .expect("hello world. this is from master 8", done);
//   });
// });

// ---------------------OPTION2-----------------------------
// ---------------------does not work-----------------------------
// describe("test1", () => {
//   it("should retrun hello world", done => {
//     request(app)
//       .get("/")
//       .then(res => {
//         expect(res.body).to.contain("hello world. this is from master 8");
//         done();
//       });
//   });
// });

// =========================================================
// ---------------------OPTION3-----------------------------
var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
  it("respond with hello world", function(done) {
    //navigate to root and check the the response is "hello world"
    request(app)
      .get("/")
      .expect("hello world. this is from master 8", done);
  });
});
