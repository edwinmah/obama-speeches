import React from 'react';
import { fetchAboutPage } from '../actions';
import { connect } from 'react-redux';
import Loading from './loading';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchAboutPage());
  }

  render() {
    const { title, content } = this.props.aboutPage;

    if (!title || !content) {
      return (
        <section id="about" className="about">
          <div className="about__entry--loading">Loading<Loading /></div>
        </section>
      );
    }

    return (
      <section id="about" className="about">
        <h2 className="about__title">{title.rendered}</h2>
        <div className="about__entry" dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </section>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    aboutPage: state.aboutPage
  };
};


export default connect(mapStateToProps)(About);
