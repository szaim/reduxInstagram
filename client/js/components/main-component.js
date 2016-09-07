var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var testComponent = React.createClass ({
	render: function(){
		return (
		<div>
		Hello test component
		</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};



// ReactDOM.render(
//   <testComponent />
//   , document.getElementById('app'));

var Container = connect(mapStateToProps)(testComponent);

module.exports = Container;
