var React     = require('react');
var store     = require('../js/store');
var TestUtils = require('react-addons-test-utils');
var should    = require('chai').should();

var App         = require('../js/components/App');
var Header      = require('../js/components/header');
var SpeechList  = require('../js/components/speech-list');
var Speech      = require('../js/components/speech');
var About       = require('../js/components/about');
var Footer      = require('../js/components/footer');


describe('The App', function() {
  it('loads.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<App store={store} />);
    var result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.children.should.be.an('array');
    result.props.children.should.have.length(3);
  });

  it('Header renders and receives mapped props.',  function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Header store={store} />);
    var result = renderer.getRenderOutput();

    result.props.name.should.be.a('string');
    result.props.description.should.be.a('string');
    result.props.speeches.should.be.an('object');
    result.props.name.should.equal('');
    result.props.description.should.equal('');
  });

  it('SpeechList renders and receives mapped props.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<SpeechList store={store} />);
    var result = renderer.getRenderOutput();

    result.props.speeches.should.be.an('object');
  });

  it('About renders and receives mapped props.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<About store={store} />);
    var result = renderer.getRenderOutput();

    result.props.aboutPage.should.be.an('object');
  });

  it('Footer renders.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Footer store={store} />);
    var result = renderer.getRenderOutput();
  });
});
