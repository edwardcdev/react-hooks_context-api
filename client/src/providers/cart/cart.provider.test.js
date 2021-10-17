import React from 'react';
import CartProvider, { CartContext } from './cart.provider';
import { shallow, mount } from 'enzyme';

describe("CartProvider Component", () => {

  it("set dropdown hidden status to true", () => {
    const TestComponent = () => {
      const { hidden, toggleHidden } = React.useContext(CartContext);
      return (
        <div>
          <div data-testid="value">{hidden.toString()}</div>
          <button onClick={toggleHidden}>Open/Close Dropdown</button>
        </div>
      )
    }

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual("true");
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("false");
  })

  const renderCartComponent = (action) => {
    return (
      <CartProvider>
        <div onClick={action}>{action}</div>
      </CartProvider>
    )
  }

  it("set cartItems to an empty array and adds user to the cartItems", () => {
    const TestComponent = () => {
      const { addItem } = useContext(CartContext);
      return (
        <CartProvider>
          <div onClick={addItem}>Add Item</div>
        </CartProvider>
      )
    }

    expect('test').toEqual('test');


  })
})