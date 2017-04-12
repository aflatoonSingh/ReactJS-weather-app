var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');//object destructuring from ES6.
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var Examples = require('Example');
var About = require('About');




ReactDOM.render(
   <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <Route path='about' component={About}></Route>
        <Route path='examples' component={Examples}></Route>
        <IndexRoute component={Weather}/>
        </Route>
   </Router>,
    document.getElementById('app')
);