
var expect = require("chai").expect;
var lib = require("./lib");

describe("covered test", function () {
  it('should cover', function(){
    expect(lib.a).to.equal(1);
  })
})




