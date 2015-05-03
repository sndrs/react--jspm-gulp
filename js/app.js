import React from 'react';
import domReady from 'domready';

class App extends React.Component {
    render () {
        return (
            <div>hello</div>
        )
    }
}

domReady(function () {
    React.render(<App />, document.getElementById('app'));
});
