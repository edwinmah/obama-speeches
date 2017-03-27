import React from 'react';
import Header from './header';
import Search from './search';
import Footer from './footer';


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <main id="content">
          <Search />
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
});


module.exports = App;
