var React = require('react');

var Image = function(props){
	return (
		<div className="instaImage text-center container">
			<h5>{props.text}</h5>
			<img className="instaImage" src={props.url}/>
			<p>#Likes: {props.likesCount} </p>
		</div>
	);
}

module.exports= Image;