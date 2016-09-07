var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
//dummy Data:
var instaData = require('./components/dummyData.js');
//children components:
var SearchBar = require('./components/search-bar-component');
var ImageList = require('./components/ImageList-component');


var Board = React.createClass({
	render: function(){
		return(
			<div className='Board'>
				<h1 className='text-center'>InstaWinner</h1>
				<SearchBar />
				<ImageList />

			</div>
		);
	}
});

var routes = (
	<Router history={hashHistory}>
		<Route path="/app" component={Board} />
	</Router>
)

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});