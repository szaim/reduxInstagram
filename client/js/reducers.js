// var update = require('react-addons-update');
var actions = require('./actions');

var initialState = {
	message: "Hello From Redux initial state"
	};

var locationRequest = function(state, action){
	state = state || initialState;

	if(action.type === actions.FETCH_DATA_SUCCESS){
		console.log(state);
		return {message: action.data};
	}
	if(action.type === actions.FETCH_DATA_ERROR){
		console.log(error);
		return state
	}
	return state;

}

exports.locationRequest = locationRequest;