var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
//dummy Data:
var instaData = require('./components/dummyData.js');
//children components:
var SearchBar = require('./components/search-bar-component');
var ImageList = require('./components/ImageList-component');
var store = require('./store');


var Board = React.createClass({
	render: function(){
		return(
			<div className='Board'>
			{this.props.message}
				<h1 className='text-center'>InstaWinner</h1>
				<SearchBar />
				<ImageList />
				

			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
        message: state.message
    };
};

var Container = connect(mapStateToProps)(Board);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( <Provider store={store}>
            <Container />
        </Provider>, document.getElementById('app'));
});