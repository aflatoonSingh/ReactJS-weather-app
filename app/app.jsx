var React = require('react');
var ReactDOM = require('react-dom');

var objOne ={
    name:'sam',
    nationality:'British'
};

var objTwo= {
    age:'25',
    ...objOne
};

console.log(objTwo);
ReactDOM.render(
   <h1>React Default Template for ReactJs applications</h1>,
    document.getElementById('app')
);