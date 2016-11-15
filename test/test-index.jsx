var React     = require('react');
var TestUtils = require('react-addons-test-utils');
var should    = require('chai').should();

var App       = require('../js/components/App');


describe('App', function() {
  it('Renders hello world',  function() {

    var renderer = TestUtils.createRenderer();
    renderer.render(<App />);
                    var result = renderer.getRenderOutput();

  });
});
