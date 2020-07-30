const request = require('request')
request('https://api.thecatapi.com/v1/breeds/search?q=lj', function (error, response, body) {
  
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data);
    console.log(typeof data)
  }
  else (console.log('Breed not found'))
;
});
