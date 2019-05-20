import React from 'react';
import ReactDOM from 'react-dom';
import AppPrasad from './AppPrasad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppPrasad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
