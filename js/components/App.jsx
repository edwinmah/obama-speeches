var React       = require('react');
var Header      = require('./header');
var Nav         = require('./nav');
var SpeechList  = require('./speech-list');
var Speech      = require('./speech');
var About       = require('./about');
var Footer      = require('./footer');


var App = function(props) {
  return (
    <div>
      <Header />
      <main id="content">
        <SpeechList />
      </main>
      <Footer />
    </div>
  );
};


module.exports = App;
