var axios = require('axios');

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=916123b06102cfceb654dc690cdfac59&units=imperial';


module.exports = {
  getTemp: function(location){
      var encodedLocation = encodeURIComponent(location);
      
      var requestUrl = `${WEATHER_API_URL}&q=${encodedLocation}`
     
      
     return axios.get(requestUrl).then(function(resp){
         debugger;
         if(resp.data.cod && resp.data.message){
                throw new Error(resp.data.message);
            }
            else{
             return resp.data.main.temp;
            }
          
      },function(resp){
          throw new Error(resp.data.message);
      });
  }  
}