var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false,
        }
    },
    handleSearch: function(location){
        var that = this;
        
        this.setState({
            isLoading: true
        });
        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp:temp,
                isLoading: false
            });
            
        },function(errorMessage){
            that.setState({
                isLoading: false,
            });
            alert(errorMessage);
        });

    },
    
    
    
   render: function(){
       console.log(this.state,'states')
       var temp = this.state.temp;
       var location = this.state.location;
       var isLoading = this.state.isLoading;
       
       function renderMessageComp(){
               if(isLoading){
                  return  <h3>App is Fetching Weather.....</h3>;
               }else if(temp && location){
                   return <WeatherMessage temp={temp} location={location}/>;
               }
           }
               
       return(
           
           
            <div>
                <h3>Get Weather Details Below !!.</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessageComp()}
            </div>
       );
   } 
    
});

module.exports = Weather;