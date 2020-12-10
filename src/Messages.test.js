import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Message component', ()=>{
//this is the smoke test
it('should render without crashing', ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Messages />, div);

    ReactDOM.unmountComponentAtNode(div)
}
)

//snapshot renderer

it('renders the UI as expected', ()=>{
    const tree = renderer.create(<Messages name='Messages' unread={4} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

//test for when unread is 0
it('renders the UI without crashing', ()=>{
    const tree = renderer.create(<Messages name='Messages' unread={0}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

})
