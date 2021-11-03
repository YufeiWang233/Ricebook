import React from 'react';
import App from './App'
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { createReducer } from './store/reducer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

test("test", () => {
    const store = createStore(createReducer);
    const wrapper = mount(
        <Provider store={store}><App></App></Provider>
    )
    expect(wrapper.find(App)).toHaveLength(1);
})