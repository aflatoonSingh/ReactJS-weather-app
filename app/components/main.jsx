var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');








var Main = React.createClass({
   render: function(){
       return(
           <div >
                <Nav/>
               <div className='mainCompContainer'>
                {this.props.children}
               </div>
                
           </div>
           
       );
   } 
    
});

module.exports = Main;