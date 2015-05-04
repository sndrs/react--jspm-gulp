import './main.css!';
import 'normalize/normalize.css!';

import React from 'react';
import domReady from 'domready';

import Hello from './components/hello';

domReady(function () {
    React.render(<Hello />, document.getElementById('app'));
});
