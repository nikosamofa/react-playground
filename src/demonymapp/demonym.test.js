import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import demonym from './demonym';
import ReactDOM from 'react-dom'

describe('demonym componet', ()=>{
    it('renders name of native and country when called', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<demonym />);
    ReactDOM.unmountComponentAtNode(div)    
    
    })

})