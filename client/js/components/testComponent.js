var React = require('react');
var connect = require('react-redux').connect;

var testComponent = React.createClass ({
	render: function(){
		return (
		<div>
			{this.props.data}
		</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};


var Container = connect(mapStateToProps)(testComponent);

module.exports = Container;
