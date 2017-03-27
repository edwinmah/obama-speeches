import React from 'react';
import About from './about';


export default class Footer extends React.Component {
  render() {
    return (
      <footer role="contentinfo" className="site-footer">
        <div className="site-footer__media sm-one-half">
          <img src="assets/images/8475945531_008ecf0cc4_o--medium.jpg"
            srcSet="assets/images/8475945531_008ecf0cc4_o--x-large.jpg 1200w,
                    assets/images/8475945531_008ecf0cc4_o--large.jpg 819w,
                    assets/images/8475945531_008ecf0cc4_o--medium.jpg 600w"
            sizes="100vw"
            alt="President Obama reviews edits of his second inaugural speech" className="site-footer__img" />
        </div>
        <div className="container container--max">
          <About />
        </div>
      </footer>
    );
  }
}
