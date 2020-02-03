import React from 'react';
import ReactDOM from 'react-dom';
import KeyCard from './keyCard';
import { render} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crash', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<KeyCard handleDisableRestrictedFloor={()=>{}}/>, div)
});

it('disable button', () => {
    const { getByTestId } = render(<KeyCard handleDisableRestrictedFloor={()=>{}}/>);  
    expect(getByTestId('button')).toHaveTextContent('key Card');
  });

  it('disable button', () => {
    const { getByTestId } = render(<KeyCard handleDisableRestrictedFloor={ ()=>{} }/>);  
    expect(getByTestId('button')).toBeEnabled();
  });
  it('disable button', () => {
    const wrapper = shallow(<KeyCard handleDisableRestrictedFloor={()=>{}}/>);
    expect(wrapper.instance().doSomethingFancy()).toEqual(true);
});



