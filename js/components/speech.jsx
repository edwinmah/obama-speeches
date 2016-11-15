var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Speech = React.createClass({
  render: function() {
    <article id="speech">
      <h2>Speech title</h2>
      <p>Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

      <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>

      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
    </article>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(Speech);


module.exports = Container;
