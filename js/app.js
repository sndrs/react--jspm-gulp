import React from 'react';
import domReady from 'domready';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>hello</div>
        )
    }
}

domReady(function () {
    React.render(<App />, document.getElementById('app'));
});