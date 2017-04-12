var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        console.log('hello')
        e.preventDefault();
        
    var location = this.refs.location.value;
        
        if(location.length>0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
        
    
},
    
    render:function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input className='cityInput' placeholder='Enter city name' ref='location'/><br/>
                <button className='weatherButton'>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;