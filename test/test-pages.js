var expect = require("chai").expect;
var request = require("request");

describe("Status and content for Todo App", function(){
  describe("Main page", function() {
    it("status", function() {
      request("http://127.0.0.1:5000/api/v1/", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    it("content", function(done) {
      request("http://127.0.0.1:5000/api/v1/", function(error, response, body) {
        expect(body).to.equal("welcome home");
        done();
      });
    });
  });
});
