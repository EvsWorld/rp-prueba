import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const app = document.createElement('app');
  ReactDOM.render(<App />, app);
  ReactDOM.unmountComponentAtNode(app);
});
