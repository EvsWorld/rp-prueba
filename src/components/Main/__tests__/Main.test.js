// import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme, { shallow, render, mount } from "enzyme";

import Main, { hello, button } from '../Main';

test(`should output 'Hello'`, () => {
  // code that tests the function
  // expect is a function that takes the thing you are testing
  expect(hello()).toBe('Hello')
})

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
})

// test('handleChange gets called', done => {
//   const handleChangeSpy = sinon.spy(Main.prototype, 'handleChange');
//   // const event = {target: {name: 'movieName', value: 'Dr. Strangelove'}};
//   const event = {target: { value: 'Dr. Strangelove' }};
//   // mount allows us to traverse the DOM and extract a specific value
//   // let main = new Main();
//   const wrap = mount(
//     <Main />
//   );
//   wrap.ref('movieName').simulate('change', event);
//   expect(handleChangeSpy.calledOnce).to.equal(true);
// })

// it('handleChange gets called', done => {
//   const wrapper = shallow( <Main /> );
//   // const instance = wrapper.instance();
//   const handleChangeSpy = jest.spyOn(Main.prototype, 'handleChange');
//   instance = new Main();
//   // instance.handleChange = jest.fn();
//   // wrapper.update();
//   const event = {target: { value: 'Dr. Strangelove' }};
//   wrapper.find('input').simulate('change', event);
//   // mount allows us to traverse the DOM and extract a specific value
//   // handleChangeSpy.update()
//   expect(instance.handleChangeSpy).toBeCalledWith(event);
// })
it('Button exists', () => {
  const wrapper = shallow( <button /> );
  expect(wrapper.length).toBe(1);
})
it('clickHandler increments testCounter state', () => {
  const wrapper = shallow( <Main /> );
  wrapper.update();
  console.log(`wrapper.state('testCounter') = `, wrapper.state('testCounter'));
  console.log(`wrapper = `, wrapper)
  expect(wrapper.state('testCounter')).toEqual(0);
  // const event = {target: { value: 'Dr. Strangelove' }};
  wrapper.find('button').simulate('click');
  expect.wrapper.state('testCounter').toEqual(1);
})
it('handleChange changes state', () => {
  const wrapper = shallow( <Main /> );
  wrapper.update();
  expect(wrapper.state['searchString']).toBe('');
  const event = {target: { value: 'Dr. Strangelove' }};
  wrapper.find('input').simulate('change', event);
  expect.wrapper.state['searchString'].toBe('dr. strangelove');
})
