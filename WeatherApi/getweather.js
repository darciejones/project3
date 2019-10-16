////weather api call
const request = require('request'); 
var getWeather = (lat,lon,callback) => { 
request ({ 
url: ​'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=78f54abff619e6ac7f997fe12615a6b4`,
json: true
},(error,response,body)=>
{
 if(!error && response.statusCode === 200) 
{ 
callback(undefined,{ 
Temp: body.main.temp 
});
} 
else {
callback('unable to fetch weather'); 
} 
}); 
}; 
module.exports.getWeather = getWeather; 
////