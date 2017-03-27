import React from 'react';
import Header from './header';
import Search from './search';
import Footer from './footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}
