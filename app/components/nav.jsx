var React = require('react');
var {Link,IndexLink} = require('react-router'); //RULE OF THUMB: not to use 'Link' With 'IndexRoute'  beacuse even after switching between links(about,get Weathe and Examples); first visited lik will still be active even though use has moved out of it to new link. Using 'IndexLink' Will solve the issue.

var Nav = React.createClass({
    render:function(){
        return(
            <div className='navContainer'>
                <span className='appHeading'>Weather Broadcast</span>
                <IndexLink className='compLinks' to='/' activeClassName='active' activeStyle={{fontWeight:'bold',color:'green'}}>Get Weather</IndexLink>
                <IndexLink className='compLinks' to='/About' activeClassName='active' activeStyle={{fontWeight:'bold',color:'green'}}>About</IndexLink>
                <IndexLink className='compLinks' to='/Examples' activeClassName='active' activeStyle={{fontWeight:'bold',color:'green'}}>Examples</IndexLink>
            </div>
            
        );
    }
    
    
});

module.exports = Nav;