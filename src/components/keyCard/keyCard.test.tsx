import React from 'react';
import ReactDOM from 'react-dom';
import KeyCard from './keyCard';
import { render} from '@testing-library/react';
import { shallow } from 'enzyme';


it('renders without crash', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<KeyCard handleDisableRestrictedFloor={()=>{}}/>, div)
});

it('keyCArd label button', () => {
    const { getByTestId } = render(<KeyCard handleDisableRestrictedFloor={()=>{}}/>);  
    expect(getByTestId('button')).toHaveTextContent('key Card');
  });

  it('Enable button', () => {
    const { getByTestId } = render(<KeyCard handleDisableRestrictedFloor={ ()=>{} }/>);  
    expect(getByTestId('button')).toBeEnabled();
  });
  



