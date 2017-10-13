/*** @jsx React.DOM */
var realReact = React.createClass({
    render: function() {
    return (<h2>Greetings, fellow human beings</h2>);
    }
});
ReactDOM.render(
   React.createElement(realReact, null),
   document.getElementById('content')
);
ReactDOM.render(
        <NavBar items={data} />,
        document.querySelector('nav')
);
ReactDOM.render(<App />, document.getElementById('root'));
