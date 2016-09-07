require('isomorphic-fetch');
var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

var fetchDataSuccess = function(data){
  return {
    type: FETCH_DATA_SUCCESS,
    data: data
  };
};

var fetchDataError = function(error){
  return {
    type: FETCH_DATA_ERROR,
    error: error
  };
};
//Fetch async calls 
var fetchData = function() {
   return function(dispatch) {
    //match it to the server.js
       var url = 'http://localhost:8080/api/hello';
       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })
 
       .then(function(data) {
               console.log("fetch DATA promise: ", data);
           return dispatch(
               fetchDataSuccess(data)
           );
       })
       .catch(function(error) {
           return dispatch(
               fetchDataError(error)
           );
       });
   }
};
exports.fetchData = fetchData;
exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;
