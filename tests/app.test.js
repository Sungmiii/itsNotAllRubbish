import React from 'react'
import {shallow} from 'enzyme'

import Home from '../client/components/Home'
import Nav from '../client/components/Nav'
import rubbishType from '../data/rubbishType' 


test('<Home />', () => {
  const expected = 'Welcome to Swellington City Council\'s Rubbish and Recycling Guide!'
  const wrapper = shallow(<Home />)
  expect(wrapper.find('h1').first().text()).toBe(expected)
})

test('<Nav />', () => {
  // include +1 for the Home Link
  const expected = Object.keys(rubbishType).length + 1
  const wrapper = shallow(<Nav />);
  expect(wrapper.find('Link').length).toBe(expected)
})