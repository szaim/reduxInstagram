var React = require('react');
var ReactDOM = require('react-dom');

var instaData = require('./components/dummyData.js');
console.log(instaData);

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

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});