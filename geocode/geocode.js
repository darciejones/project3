
const request = require('request'); 
var geocodeAddress =(address,callback) => {
var encodeAddress = encodeURIComponent(address); 
request ({
url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`, 
json:true 
},(error,response,body)=> {
if(error) 
{
callback('Unable to conncet google Servers');
}
else if(body.status === 'ZERO_RESULTS')
{
callback('Unable to find address');
}
else if(body.status === 'OK')
{
callback(undefined,{ 
address: body.results[0].formatted_address, 
latitude: body.results[0].geometry.location.lat, 
longitude: body.results[0].geometry.location.lng 
});
} 
}); 
} 
module.exports.getAddress = geocodeAddress;






// const request = require('request');
// const argv = require('yargs').argv;

// let apiKey = '78f54abff619e6ac7f997fe12615a6b4';
// let city = argv.c || 'washington, dc';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     let weather = JSON.parse(body)
//     let message = `It's ${city.main.temp} degrees in ${weather.name}!`;
//     console.log(message);

    

    
//   }
// });