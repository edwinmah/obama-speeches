import React from 'react';
import { fetchSiteInfo } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchSiteInfo());
  }

  render() {
    return (
      <header role="banner" className="site-header intrinsic intrinsic--16x9">
        <div className="container container--max">
          <div className="branding">
            <h1 className="site-header__title"><Link to={'/'}>{this.props.name}</Link></h1>
            <p className="site-header__tagline">{this.props.description}</p>
          </div>
        </div>
      </header>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    name: state.name,
    description: state.description,
    speeches: state.speeches
  };
};


export default connect(mapStateToProps)(Header);
