import React from 'react';
import ReactDOM from 'react-dom';
import App0 from './components/App0';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App0 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
