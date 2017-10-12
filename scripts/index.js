/*** @jsx React.DOM */
import 'scripts/index.css';
import App from 'scripts/App';
var realReact = React.createClass({
    render: function() {
    return (<h2>Greetings, fellow human beings</h2>);
    }
});
ReactDOM.render(
   React.createElement(realReact, null),
   document.getElementById('content')
);
ReactDOM.render(<App />, document.getElementById('root'));
