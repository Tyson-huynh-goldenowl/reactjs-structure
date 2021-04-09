import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { UserOutlined } from '@ant-design/icons';
import Avatar from "../Avatar";

describe('Avatar component', () => {
  it('renders correctly', () => {

    const output = shallow(
      <Avatar
        icon={<UserOutlined />}
        size={80}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(shallow(<Avatar icon={<UserOutlined />} size={80} />).contains(<Avatar icon={<UserOutlined />} size={80} />)).toBe(false);

  });

})