var React = require('react');

var WeatherMessage = React.createClass({
    
    render:function(){
        var temprature = this.props.temp;
        var location = this.props.location;
        return(
           <h3>It is {temprature} F in {location} !</h3>
        );
    }
});

module.exports = WeatherMessage;