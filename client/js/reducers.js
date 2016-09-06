var update = require('react-addons-update');
var actions = require('./actions');

var inisitalState = [];

var locationRequest = function(state, action){
	state = state || inisitalState;

	if(action.type === actions.FETCH_DATA_SUCCESS){
		console.log(state);
		return state;
	}
	if(action.type === actions.FETCH_DATA_ERROR){
		console.log(error);
		return error;
	}
	return state;

}

exports.locationRequest = locationRequest;