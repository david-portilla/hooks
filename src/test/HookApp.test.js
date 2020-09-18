import React from 'react'
import { shallow, configure } from 'enzyme';
import { HookApp } from '../HookApp'
import Adapter from 'enzyme-adapter-react-16';

describe('testing <HookApp />', () => {

  configure({ adapter: new Adapter() });
  test('should render properly', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  })

})
