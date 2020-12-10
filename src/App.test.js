import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


// smoke test to test if app renders to begin with 
it('renders without creashing', ()=>{
  const div = document.createElement('div');

  // the actual test to render the component
  ReactDOM.render(<App />, div);

  // the cleanup code 
  ReactDOM.unmountComponentAtNode(div);

})


