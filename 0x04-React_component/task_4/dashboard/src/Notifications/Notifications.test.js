import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications /> is rendering', () => {
  const wrapper = shallow(<Notifications />);

  it('.Notifications exists', () => {
    expect(wrapper.exists('.Notifications')).toEqual(true);
  });

  it('li quantity equal to 3', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('containst the text Here is the list of notifications', () => {
    expect(wrapper.text()).toMatch(/Here is the list of notifications/);
  });
});
