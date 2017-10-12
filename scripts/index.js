/*** @jsx React.DOM */
import './index.css';
import App from './App';

var realReact = React.createClass({
    render: function() {
    return (<h2>Greetings, This is rendered from React hahaha!</h2>);
    }
});
ReactDOM.render(
   React.createElement(realReact, null),
   document.getElementById('content')
);
ReactDOM.render(<App />, document.getElementById('root'));
