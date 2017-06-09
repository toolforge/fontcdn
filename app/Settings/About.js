// jshint ignore: start

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="about">
        <p>
          <a href="http://github.com/toollabs/fontcdn/">
            <i className="fa fa-github"></i>
          </a>
        </p>
        <p>Originally made by <a href="http://thomaspark.co">Thomas Park</a></p>
        <p>Check out <a href="http://glyphsearch.com">GlyphSearch</a> &amp; <a href="https://bootswatch.com">Bootswatch</a></p>
      </div>
    );
  }
});
