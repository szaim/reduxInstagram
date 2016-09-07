var React = require('react');
var Image = require('./image-component.js');
var instagramData = require('./dummyData.js');

var ImageList = function(props){
	var data = instagramData.data;
	var images = data.map(function(image, index){
		return <Image key={index} text={image.caption.text} url={image.images.standard_resolution.url} likesCount={image.likes.count}/>
	})
	return (
		<div className="ImageList">
			{images}
		</div>
	);
}

module.exports= ImageList;