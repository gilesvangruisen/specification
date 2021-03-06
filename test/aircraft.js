var chai = require('chai');
chai.Should();
chai.use(require('../dist/').chaiModule);

describe('Aircraft in the full tree - basic nav', function() {
  it("Sample full tree is valid", function() {
    require('./data/aircraft-nav.json').should.be.validSignalKIgnoringSelf;
  });
});

describe('Aircraft in the full tree - home base', function() {
  it("Sample full tree is valid", function() {
    require('./data/aircraft-homebase.json').should.be.validSignalKIgnoringSelf;
  });
});

describe('Aircraft in the full tree - bad mmsi', function() {
  it("Sample full tree is valid", function() {
    require('./data/aircraft-mmsi-bad.json').should.not.be.validSignalKIgnoringSelf;
  });
});

